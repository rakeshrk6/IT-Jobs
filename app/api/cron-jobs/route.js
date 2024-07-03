import { fetchAmazonJobs } from "../../scrappers/amazonScrapper/fetchData"
import { fetchGoogleJobs } from "../../scrappers/googleScrapper/fetchData"
import { fetchInternshalaData } from "../../scrappers/internshalaScrapper/fetchData"

export const GET = async (req, res) => {
  try {
    await fetchInternshalaData()
    await fetchGoogleJobs()
    await fetchAmazonJobs()
    return new Response("Data fetched", { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}
