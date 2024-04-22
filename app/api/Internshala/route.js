import Internshala from "@/models/internshala"
import { connectToDB } from "@/utils/database"
import { fetchGoogleJobs } from "@/app/scrappers/googleScrapper/fetchData"
import { fetchInternshalaData } from "@/app/scrappers/internshalaScrapper/fetchData"

// export const dynamic = "force-dynamic"

export const GET = async (req, res) => {
  try {
    // await fetchInternshalaData()
    await connectToDB()
    // await canFetch()
    const jobs = await Internshala.find({})

    return new Response(JSON.stringify(jobs), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}
