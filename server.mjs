// import express from "express"
// import next from "next"
// import cron from "node-cron"
// import { connectToDB } from "./utils/database.js"
// import { fetchInternshalaData } from "./scrappers/internshalaScrapper/fetchData.js"

// const dev = process.env.NODE_ENV !== "production"
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app
//   .prepare()
//   .then(() => {
//     const server = express()
//     connectToDB()

//     cron.schedule("* * * * *", () => {
//       console.log("Task started at 5 AM")
//       fetchInternshalaData()
//       // fetchGoogleJobs()
//       // fetchAmazonJobs()
//     })

//     server.listen(8000, (err) => {
//       if (err) throw err
//       console.log("server started on 8000")
//     })
//   })
//   .catch((err) => {
//     console.error(err)
//   })
