import { companyData } from "../assets/companyCardData"
import CompanyCard from "../components/CompanyCard"
import cron from "node-cron"
import { fetchInternshalaData } from "../scrappers/internshalaScrapper/fetchData"

const page = () => {
  cron.schedule("* * * * *", async () => {
    console.log("started")
    const internshalaJobs = await fetchInternshalaData()
    console.log("job fetched", internshalaJobs)
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
