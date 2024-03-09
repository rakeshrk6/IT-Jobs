"use client"
import JobFeed from "@/components/JobFeed"
import { useEffect, useState } from "react"

const page = () => {
  const [data, setData] = useState([])

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
    <div>
      <JobFeed data={data} />
    </div>
  )
}

export default page
