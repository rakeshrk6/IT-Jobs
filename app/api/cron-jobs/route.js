import { fetchAmazonJobs } from "../../scrappers/amazonScrapper/fetchData"
import { fetchGoogleJobs } from "../../scrappers/googleScrapper/fetchData"
import { fetchInternshalaData } from "../../scrappers/internshalaScrapper/fetchData"

export const GET = async (req, res) => {
  try {
    const internshalaJobs = await fetchInternshalaData()
    await fetchGoogleJobs()
    // await fetchAmazonJobs()
    return new Response(JSON.stringify(internshalaJobs), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}
