// export const dynamic = "force-dynamic"

import Google from "../../../models/google"
import { connectToDB } from "../../../utils/database"
import { fetchGoogleJobs } from "../../scrappers/googleScrapper/fetchData"

export const GET = async (req, res) => {
  try {
    await connectToDB()
    // await fetchGoogleJobs()
    // await canFetch()
    const jobs = await Google.find({})

    return new Response(JSON.stringify(jobs), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}
