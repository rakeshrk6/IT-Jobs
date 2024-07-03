import Link from "next/link"
import { IoLocationOutline } from "react-icons/io5"

const JobFeed = ({ data }) => {
  return (
    <div className="mt-[33px] w-full mx-auto text-gray-700">
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <div className="outline outline-1 outline-gray-300 flex justify-between p-6 px-8 rounded-md shadow-md items-center mt-7">
              <div className=" w-[26rem]">
                <h1 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h1>
                <h2 className=" text-base text-gray-500 font-medium">
                  {item.companyName}
                </h2>
                <div className="flex  mt-9 mb-2 items-center">
                  <IoLocationOutline className="mr-1" />
                  <p className=" text-base">{item.location}</p>
                </div>

                <div className="flex items-center">
                  {item.stipend && (
                    <h2 className="font-medium text-sm mr-5">{item.stipend}</h2>
                  )}

                  <h2 className="px-3 py-1 bg-gray-300 rounded-md text-sm text-gray-700 ">
                    {item.jobType}
                  </h2>
                </div>
              </div>
              <div className="relative ml-16 flex items-center flex-col">
                <div className="w-20 h-20 flex items-center justify-center mb-7">
                  {item.img && <img src={`${item.img}`} alt="" />}
                </div>

                <div className="flex justify-center items-center">
                  <Link href={`${item.url}`} target="_blank">
                    <button className="px-6 py-1.5  bg-zinc-800 text-white rounded-md">
                      Apply
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default JobFeed
