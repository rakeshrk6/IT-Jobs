import { companyData } from "../assets/companyCardData"
import CompanyCard from "../components/CompanyCard"

const page = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {companyData.map((item) => (
        <CompanyCard key={item.name} item={item} />
      ))}
    </div>
  )
}

export default page
