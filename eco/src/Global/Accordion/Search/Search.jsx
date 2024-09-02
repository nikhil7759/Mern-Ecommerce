import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

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
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={searchBox}
        onChange={searchHandler}
      />
    </Box>
  );
}
