import Amazon from "../../../models/amazon"
import { connectToDB } from "../../../utils/database"
import { fetchAmazonJobs } from "../../../scrappers/amazonScrapper/fetchData"

export const GET = async (req, res) => {
  try {
    await connectToDB()
    // await fetchAmazonJobs()
    const jobs = await Amazon.find({})

    return new Response(JSON.stringify(jobs), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}
