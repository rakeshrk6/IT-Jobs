"use client"

import Link from "next/link"
import ActiveLink from "./ActiveLink"

const SideMenu = () => {
  return (
    <div className="h-[100vh] w-[20%] fixed flex justify-center outline outline-1 outline-gray-300 pt-10">
      <div className="flex flex-col justify-start place-items-start w-full mx-3 gap-2">
        <ActiveLink href="/">Job Feed</ActiveLink>
        <ActiveLink href="/internshala">Internships</ActiveLink>
        <ActiveLink href="">Fulltime Jobs</ActiveLink>
        <ActiveLink href="">Applied</ActiveLink>
        <ActiveLink href="">Messages</ActiveLink>
      </div>
    </div>
  )
}

export default SideMenu
