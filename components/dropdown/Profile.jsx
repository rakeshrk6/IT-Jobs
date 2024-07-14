import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { useState } from "react"

export default function Profile({ handleFilter }) {
  const handleChange = async (event, newValue) => {
    // console.log(newValue.label)
    await handleFilter(newValue?.label)
  }
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      size="small"
      onSelect={handleChange}
      options={ITJobRoles}
      renderInput={(params) => <TextField {...params} label="Profile" />}
    />
  )
}

export const ITJobRoles = [
  { label: "Software Development" },
  { label: "Software Engineer" },
  { label: "Web Development" },
  { label: "Mobile App Development" },
  { label: "Full Stack Development" },
  { label: "Frontend Development" },
  { label: "Backend Development" },
  { label: "DevOps Engineer" },
  { label: "Cloud Engineer" },
  { label: "Systems Administrator" },
  { label: "Network Engineer" },
  { label: "Database Administrator" },
  { label: "Data Analyst" },
  { label: "Data Scientist" },
  { label: "Machine Learning Engineer" },
  { label: "AI Engineer" },
  { label: "UI/UX Designer" },
  { label: "Product Manager" },
  { label: "Technical Support Engineer" },
  { label: "Security Analyst" },
  { label: "Penetration Tester" },
  { label: "Security Consultant" },
  { label: "IT Project Manager" },
  { label: "Business Analyst" },
  { label: "Quality Assurance Tester" },
]
