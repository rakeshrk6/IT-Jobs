"use client"
import JobFeed from "@/components/JobFeed"
import JobFilter from "@/components/JobFilter"
import { RxCross2 } from "react-icons/rx"
import Image from "next/image"
import { Suspense, useEffect, useState } from "react"
import Loading from "./loading"

function page() {
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState([])
  const [searchBoxVal, setSearchBoxVal] = useState("")
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchedResults, setSearchedResults] = useState([])
  const [isSticky, setIsSticky] = useState(false)

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout)
    const searchTextValue = e.target.value
    setSearchBoxVal(searchTextValue)

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(searchTextValue)
        setSearchedResults(searchResult)
      }, 500)
    )
  }

  const filterPrompts = (searchtext) => {
    try {
      const searchWords = searchtext.trim().split(/\s+/)

      // Create a regular expression pattern to match any of the search words
      const regexPattern = searchWords.map((word) => `(?=.*${word})`).join("")

      // Construct the final regular expression with the pattern
      const regex = new RegExp(regexPattern, "i")
      console.log("regex", regex)

      const searchResult = data.filter((item) => {
        const combinedString = `${item.title} ${item.companyName} ${item.jobType} ${item.location} ${item.stipend}`
        return regex.test(combinedString)
      })

      console.log("result", searchResult)
      setSearchedResults(searchResult)

      return searchResult
    } catch (error) {
      console.log(error)
    }
  }

  const handleFilter = (tagName) => {
    console.log("filter selected", tagName)

    setSearchText((prev) => {
      let combinedStr
      if (searchText.length > 0) {
        combinedStr = searchText.join(" ") + " " + tagName
      } else {
        combinedStr = tagName
      }
      try {
        console.log("setsearch", combinedStr.trim())
        const searchResult = filterPrompts(combinedStr.trim())

        return [...prev, tagName]
      } catch (error) {
        console.log(error)
      }
    })
  }

  function removeTag(tagName) {
    setSearchText((prev) => prev.filter((item) => item !== tagName))
  }

  useEffect(() => {
    console.log(searchText)
  }, [searchText])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/Internshala")
        const data = await res.json()
        console.log(data)
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex flex-1 ">
      <section className=" w-[40rem]">
        <form
          className={`relative w-full flex-center bg-[#f0f0f0] py-7 px-5 rounded-md ${
            isSticky ? "sticky top-[70px] z-[200]" : ""
          }`}
        >
          <input
            name="searchBar"
            type="text"
            placeholder="Search by Role / Skills"
            value={searchBoxVal}
            onChange={handleSearchChange}
            required
            className="p-2.5 w-full outline outline-1 outline-gray-300 rounded-full px-6 focus-within:outline-gray-700"
          />
          {searchBoxVal && (
            <RxCross2
              alt="clear_icon"
              width={30}
              height={30}
              className="absolute right-10 top-[42px] cursor-pointer"
              onClick={() => setSearchBoxVal("")}
            />
          )}
        </form>

        {searchText.length > 0 || searchBoxVal ? (
          <JobFeed data={searchedResults} />
        ) : (
          <JobFeed data={data} />
        )}
      </section>
      <JobFilter handleFilter={handleFilter} removeTag={removeTag} />
    </div>
  )
}

export default page
