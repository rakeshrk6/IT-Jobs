"use client"

import Link from "next/link"

function Navbar() {
  return (
    <div
      className={`bg-white fixed z-[50] top-0 w-full shadow-md
      `}
    >
      <nav className="flex items-center justify-between max-w-6xl h-[70px] mx-auto  ">
        <div className="text-xl font-semibold text-zinc-800">
          <Link href="/">
            <h1>IT Jobs</h1>
          </Link>
        </div>

        <div className="flex -mr-20">
          <Link href="/">
            <p className={`mx-4 `}>Home</p>
          </Link>
          <Link href="/">
            <p className="mx-4">Jobs</p>
          </Link>
          <Link href="">
            <p className="mx-4">About Us</p>
          </Link>
          <Link href="">
            <p className="mx-4">Contact Us</p>
          </Link>
        </div>

        <div>
          <Link href="/">
            <button className="mx-2 outline outline-1 text-black outline-black hover:bg-zinc-700 hover:text-white rounded-lg p-2 px-7">
              Sign In
            </button>
          </Link>

          {/* <button className="mx-2 bg-green-600 hover:bg-green-700 rounded-lg p-2 text-white px-5">
            Log Out
          </button> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
