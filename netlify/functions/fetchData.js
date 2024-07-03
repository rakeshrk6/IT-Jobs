import { fetchGoogleJobs } from "../../app/scrappers/googleScrapper/fetchData"
import { fetchInternshalaData } from "../../app/scrappers/internshalaScrapper/fetchData"

export const handler = async (event, context) => {
  try {
    // await fetchInternshalaData()
    // await fetchGoogleJobs()
    console.log("cron jobs called")
    return new Response("Data fetched", { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}
