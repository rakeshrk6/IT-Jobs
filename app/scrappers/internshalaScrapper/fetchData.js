import Internshala from "@/models/internshala"
import scheduleCronJob from "@/app/cronJob"
const puppeteer = require("puppeteer")
const cron = require("cron")

export async function fetchInternshalaData() {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(
      "https://internshala.com/internships/front-end-development,software-development,web-development-internship/"
    )

    const jobs = await page.$$eval(
      "#internship_list_container_1 .internship_meta",
      (ele) =>
        ele.map((e) => ({
          title: e.querySelector(".individual_internship_header .heading_4_5")
            .innerText,
          companyName: e.querySelector(".link_display_like_text").innerText,
          location: e.querySelector("#location_names .location_link").innerText,
          stipend: e.querySelector(".stipend_container .item_body span")
            .innerText,
          jobType: e.querySelector(".other_label_container .status").innerText,
          url: e.querySelector(".company h3 a").href,
          img:
            e.querySelector(
              ".individual_internship_header .internship_logo img"
            )?.src ?? "",
        }))
    )
    // console.log(jobs)
    await Internshala.deleteMany({ jobs })

    // Save new data to MongoDB
    await Internshala.create(jobs)

    console.log("Data fetched and saved successfully.")
    await browser.close()
  } catch (error) {
    console.error("Error fetching or saving data:", error)
  }
}
