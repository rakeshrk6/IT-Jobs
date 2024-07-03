"use client"

import { ColorRing } from "react-loader-spinner"

export default function Loading() {
  return (
    <div className="mt-52 ml-96 pl-16">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  )
}
