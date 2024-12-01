// hooks/useFilter.js

import { useState, useEffect } from "react"

const useFilter = (initialData) => {
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState("")
  const [searchResultHook, setSearchResult] = useState([])

  useEffect(() => {
    setData(initialData)
  }, [initialData])

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
      setSearchResult(searchResult)

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

  return {
    data,
    searchText,
    searchResultHook,
    filterPrompts,
    handleFilter,
    removeTag,
  }
}

export default useFilter
