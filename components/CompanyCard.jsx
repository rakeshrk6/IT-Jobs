"use client"
import { useRouter } from "next/navigation"

const CompanyCard = ({ item }) => {
  const router = useRouter()

  function handleClick(route) {
    if (route == "Internshala") {
      router.push("/internshala")
    }
    if (route == "Google") {
      router.push("/google")
    }
    if (route == "Amazon") {
      router.push("/amazon")
    }
  }

  return (
    <div
      className="flex flex-col justify-center  items-center rounded-md w-[15rem] 
        outline outline-1 outline-gray-300 shadow-md"
    >
      <div className="w-full h-[8rem] overflow-hidden rounded-t-md">
        <img
          className="object-cover w-full h-full"
          src={item.img_url}
          alt="img"
        />
      </div>

      <div className=" text-lg font-semibold text-gray-800 pt-3">
        {item.name}
      </div>

      <div className="py-3 pb-5">
        <button
          onClick={() => handleClick(item.name)}
          className=" outline outline-1 py-[0.5rem] px-6 rounded-md font-[500] text-[13px] hover:bg-gray-100"
        >
          View Jobs
        </button>
      </div>
    </div>
  )
}

export default CompanyCard
