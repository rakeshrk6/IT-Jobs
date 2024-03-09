import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

export default function Locations({ handleFilter }) {
  const handleChange = (event, newValue) => {
    // console.log(newValue.label)
    handleFilter(newValue?.label)
  }
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      size="small"
      onChange={handleChange}
      options={ITJobLocationsIndia}
      renderInput={(params) => <TextField {...params} label="Locations" />}
    />
  )
}

export const ITJobLocationsIndia = [
  { label: "Bangalore" },
  { label: "Hyderabad" },
  { label: "Chennai" },
  { label: "Pune" },
  { label: "Mumbai" },
  { label: "Gurgaon" },
  { label: "Noida" },
  { label: "Delhi" },
  { label: "Kolkata" },
  { label: "Patna" },
]
