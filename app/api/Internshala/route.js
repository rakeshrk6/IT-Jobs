import Internshala from "../../../models/internshala"
import { connectToDB } from "../../../utils/database"
import { fetchInternshalaData } from "../../scrappers/internshalaScrapper/fetchData"

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
