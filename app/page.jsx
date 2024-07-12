import { companyData } from "../assets/companyCardData"
import CompanyCard from "../components/CompanyCard"
import { fetchInternshalaData } from "../scrappers/internshalaScrapper/fetchData"
import cron from "node-cron"

const page = () => {
  cron.schedule("* * * * *", () => {
    console.log("Task started at 5 AM")
    fetchInternshalaData()
    // fetchGoogleJobs()
    // fetchAmazonJobs()
  })
  return (
    <div className="flex flex-wrap gap-6">
      {companyData.map((item) => (
        <CompanyCard key={item.name} item={item} />
      ))}
    </div>
  )
}

export default page
