import Internshala from "../../../models/internshala"
import { connectToDB } from "../../../utils/database"

export const GET = async (req, res) => {
  try {
    await connectToDB()
    const jobs = await Internshala.find({})

    return new Response(JSON.stringify(jobs), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}
