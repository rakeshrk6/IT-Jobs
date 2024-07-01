"use client"

import { useEffect, useState } from "react"
import useFilter from "../../../hooks/useFilter"
import JobFeed from "../../../components/JobFeed"
import JobFilter from "../../../components/JobFilter"

const page = () => {
  const [data, setData] = useState([])
  const [searchedResults, setSearchedResults] = useState([])

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/google")
        const data = await res.json()
        console.log(data)
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-1">
      <div className="-mt-1">
        {searchText.length > 0 ? (
          <JobFeed data={searchedResults} />
        ) : (
          <JobFeed data={data} />
        )}
      </div>
      <JobFilter handleFilter={handleFilter} removeTag={removeTag} />
    </div>
  )
}

export default page
