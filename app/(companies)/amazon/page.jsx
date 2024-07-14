"use client"

import { useEffect, useState } from "react"
import useFilter from "../../../hooks/useFilter"
import JobFeed from "../../../components/JobFeed"
import JobFilter from "../../../components/JobFilter"
import { RxCross2 } from "react-icons/rx"

const page = () => {
  const [data, setData] = useState([])
  const [searchBoxVal, setSearchBoxVal] = useState("")
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchedResults, setSearchedResults] = useState([])
  const [isSticky, setIsSticky] = useState(false)

  const {
    searchText,
    filterPrompts,
    searchResultHook,
    handleFilter,
    removeTag,
  } = useFilter(data)

  useEffect(() => {
    setSearchedResults(searchResultHook)
  }, [searchText])

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/amazon")
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
    <div className="flex flex-1">
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
