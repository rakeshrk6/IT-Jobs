import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

export default function Salary() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      size="small"
      options={MinSalary}
      renderInput={(params) => (
        <TextField {...params} label="Min monthly stipend" />
      )}
    />
  )
}

export const MinSalary = [
  { label: "5k" },
  { label: "10k" },
  { label: "15k" },
  { label: "20k" },
  { label: "25k" },
  { label: "30k" },
  { label: "50k" },
  { label: "more than 50k" },
]
