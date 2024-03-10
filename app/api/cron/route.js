import { fetchGoogleJobs } from "@/app/scrappers/googleScrapper/fetchData"
import { fetchInternshalaData } from "@/app/scrappers/internshalaScrapper/fetchData"

import { NextResponse } from "next/server"

export async function GET() {
  try {
    await fetchInternshalaData()
    await fetchGoogleJobs()
    return NextResponse.json({ ok: true })
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}

export const GET = async (req, res) => {
  try {
    await fetchInternshalaData()
    await fetchGoogleJobs()
    return new Response("data fetched", { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}
