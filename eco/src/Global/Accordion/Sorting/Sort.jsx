import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function Sorting({ onSortChange }) {
  const [sortOption, setSortOption] = useState("");

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    onSortChange(selectedOption); // Notify parent about the sort change
  };

  return (
    <Box sx={{    minWidth: { xs: 100, sm: 120 }, // Responsive minWidth
    padding: { xs: 1, sm: 1 },      
    maxWidth: '100%',                
    boxSizing: 'border-box'          }}>
      <FormControl fullWidth>
        <InputLabel id="sorting-select-label"><span>Sort By</span></InputLabel>
        <Select
          labelId="sorting-select-label"
          sx={{
            fontSize: { xs: '0.75rem', sm: '0.75rem' },
            width:{xs:'120%'}, // Smaller font size for different screen sizes
          }}
          id="sorting-select"
          value={sortOption}
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value="">Relevance</MenuItem>
          <MenuItem value={20}>Price Low to High</MenuItem>
          <MenuItem value={30}>Price High to Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
