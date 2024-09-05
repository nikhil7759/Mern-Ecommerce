import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import"./Search.css"

export default function SearchBox({ onSearch }) {
  const [searchBox, setSearchBox] = useState("");

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    setSearchBox(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <Box
  component="form"
  sx={{
    "& > :not(style)": { 
      m: { xs: 0, sm: 1 }, // Margin is 0 on extra-small devices, 1 on small and larger devices
      width: { xs: "100%", sm: "25ch" }, // Width is 100% on extra-small devices, 25ch on small and larger devices
    },
  }}
  noValidate
  autoComplete="off"
  className="box_search"
>
  <TextField
    id="outlined-basic"
    label="Search"
    variant="outlined"
    value={searchBox}
    onChange={searchHandler}
    fullWidth
  />
</Box>


  );
}
