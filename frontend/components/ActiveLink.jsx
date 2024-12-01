"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const ActiveLink = ({ href, children, className }) => {
  const pathname = usePathname()
  const isActive = pathname === href
  const taiwindClass =
    "p-2.5 w-full pl-[4.5rem] hover:bg-[#f0f0f0] rounded-full font-medium text-zinc-600 cursor-pointer"

  return (
    <Link
      href={href}
      className={`${taiwindClass} ${isActive ? "bg-[#f0f0f0]" : ""}`}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
