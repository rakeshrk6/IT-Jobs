"use client"
import { useEffect, useState } from "react"

import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import { ITJobRoles } from "./dropdown/Profile"
import { ITJobLocationsIndia } from "./dropdown/Locations"
import { MinSalary } from "./dropdown/Salary"

const JobFilter = ({ handleFilter, removeTag }) => {
  const [profileValue, setProfileValue] = useState("")
  const [locationValue, setLocationValue] = useState("")
  const [initialMount, setInitialMount] = useState(true)
  const [stipend, setStipend] = useState("")
  const [workFromHome, setWorkFromHome] = useState("")

  const handleWorkFromHomeChange = (event) => {
    const checked = event.target.checked
    if (!checked) {
      removeTag("work from home")
      setWorkFromHome("")
    } else {
      setWorkFromHome("work from home")
    }
  }

  const handleChangeProfile = (event, newValue) => {
    if (newValue == null) {
      removeTag(profileValue)
      setProfileValue("")
    } else {
      setProfileValue(newValue.label)
    }
  }
  const handleChangeLocation = (event, newValue) => {
    if (newValue == null) {
      removeTag(locationValue)
      setLocationValue("")
    } else {
      setLocationValue(newValue.label)
    }
  }
  const handleChangeStipend = (event, newValue) => {
    if (newValue == null) {
      removeTag(stipend)
      setStipend("")
    } else {
      const numStipend = parseFloat(newValue.label.replace("k", "000"))
      const formattedVal = numStipend.toLocaleString()
      setStipend(formattedVal)
    }
  }
  useEffect(() => {
    if (!initialMount) {
      handleFilter(profileValue)
    }
  }, [profileValue])

  useEffect(() => {
    console.log("selected", locationValue)
    if (!initialMount) {
      handleFilter(locationValue)
    }
  }, [locationValue])
  useEffect(() => {
    console.log("selected", stipend)
    if (!initialMount) {
      handleFilter(stipend)
    }
  }, [stipend])
  useEffect(() => {
    if (!initialMount) {
      console.log("checked", workFromHome)

      handleFilter(workFromHome)
    }
  }, [workFromHome])

  useEffect(() => {
    setInitialMount(false)
  }, [])

  return (
    <div className="fixed mt-9 right-10 px-10 py-6 outline outline-1 outline-gray-300 rounded-md ">
      <div className=" text-center font-semibold text-lg text-zinc-700 mb-10">
        Filters
      </div>
      <div className="w-64">
        <div className="flex flex-col">
          <Autocomplete
            disablePortal
            size="small"
            onChange={handleChangeProfile}
            options={ITJobRoles}
            renderInput={(params) => <TextField {...params} label="Profile" />}
          />
        </div>
        <div className="flex flex-col mt-9 mb-10">
          <Autocomplete
            disablePortal
            size="small"
            onChange={handleChangeLocation}
            options={ITJobLocationsIndia}
            renderInput={(params) => (
              <TextField {...params} label="Locations" />
            )}
          />
        </div>
        <div className="flex items-center mb-2">
          <input
            name="work-from-home"
            value={workFromHome}
            onChange={handleWorkFromHomeChange}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
          />
          <label className="ml-3 min-w-0 flex-1 text-gray-500">
            Work From Home
          </label>
        </div>
        <div className="flex items-center">
          <input
            name="part-time"
            value="partTime"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
          />
          <label className="ml-3 min-w-0 flex-1 text-gray-500">Part-Time</label>
        </div>
        <div className="flex flex-col mt-9 mb-7">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            size="small"
            options={MinSalary}
            onChange={handleChangeStipend}
            renderInput={(params) => (
              <TextField {...params} label="Min monthly stipend" />
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default JobFilter
