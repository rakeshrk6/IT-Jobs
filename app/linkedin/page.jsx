"use client"
import JobFeed from "@/components/JobFeed"
import { useEffect, useState } from "react"
import scheduleCronJob, {
  fetchLinkedinJobs,
} from "../scrappers/linkedinScrapper/fetchData"

const page = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // scheduleCronJob()
        const res = await fetch("/api/linkedin")
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
