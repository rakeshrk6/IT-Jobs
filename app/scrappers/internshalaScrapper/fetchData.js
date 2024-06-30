import Internshala from "@/models/internshala"
import { connectToDB } from "@/utils/database"
const puppeteer = require("puppeteer")
const cron = require("cron")

export async function fetchInternshalaData() {
  try {
    await connectToDB()
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(
      "https://internshala.com/internships/front-end-development,software-development,web-development-internship/"
    )

    const jobs = await page.$$eval(
      "#internship_list_container_1 .individual_internship",
      (ele) =>
        ele.map((e) => ({
          title:
            e.querySelector(".individual_internship_header .heading_4_5")
              ?.innerText || "",
          companyName:
            e.querySelector(".individual_internship_header .company_name")
              ?.innerText || "",
          location: e.querySelector("#location_names")?.innerText || "",
          stipend:
            e.querySelector(".stipend_container .item_body span")?.innerText ||
            "",
          jobType:
            e.querySelector(".other_label_container .status")?.innerText || "",
          url:
            `https://internshala.com${e
              .querySelector(".view_detail_button_outline")
              ?.getAttribute("href")}` || "",
          img: e.querySelector(".internship_logo img")?.src ?? "",
        }))
    )
    await Internshala.deleteMany({ jobs })

    // Save new data to MongoDB
    await Internshala.create(jobs)

    console.log("Data fetched and saved successfully.")
    await browser.close()
  } catch (error) {
    console.error("Error fetching or saving data:", error)
  }
}
