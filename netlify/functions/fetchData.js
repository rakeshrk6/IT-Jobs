<<<<<<< HEAD
// import { fetchGoogleJobs } from "../../app/scrappers/googleScrapper/fetchData"
// import { fetchInternshalaData } from "../../app/scrappers/internshalaScrapper/fetchData"

// export const handler = async (event, context) => {
//   try {
//     await fetchInternshalaData()
//     await fetchGoogleJobs()
//     return {
//       statusCode: 200,
//       body: "Data fetched",
//     }
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: "Failed to fetch all prompts",
//     }
//   }
// }
=======
import { fetchGoogleJobs } from "../../app/scrappers/googleScrapper/fetchData"
import { fetchInternshalaData } from "../../app/scrappers/internshalaScrapper/fetchData"

export const handler = async (event, context) => {
  try {
    await fetchInternshalaData()
    await fetchGoogleJobs()
    return {
      statusCode: 200,
      body: "Data fetched",
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: "Failed to fetch all prompts",
    }
  }
}
>>>>>>> d8bb546f2dfa72ec8f6a3eb30222fb20e8f2d816
