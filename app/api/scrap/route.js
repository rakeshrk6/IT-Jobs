const axios = require("axios")
const cheerio = require("cheerio")
// const cors = require('cors')
// app.use(cors())

const url =
  "https://internshala.com/internships/front-end-development,software-development,web-development-internship/"

export const GET = async (req, res) => {
  try {
    const response = await axios(url)
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
    $(".container-fluid .internship_meta", html).each(function () {
      const title = $(this)
        .find(".individual_internship_header .heading_4_5")
        .text()

      const companyName = $(this).find(".company_name").text()
      const location = $(this).find("#location_names").text()

      const otherDetails = $(this).find(".stipend").text()
      const jobType = $(this).find(".status-inactive").text()

      const url = $(this).find(".individual_internship_header a").attr("href")

      articles.push({
        title,
        location,
        otherDetails,
        jobType,
        url: `https://internshala.com${url}`,
        companyName,
      })
    })
    // console.log("data", articles)
    return new Response(JSON.stringify(articles), { status: 200 })
  } catch (error) {
    console.log(error)
  }
}
