// PriceRangeSlider.js
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";

const MIN = 100;
const MAX = 5000;

export default function PriceRangeSlider({ onChange }) {
  const [value, setValue] = useState([MIN, MAX]);

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value, onChange]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box  sx={{
      width: { xs: "100%", sm: 250 },
      p: { xs: "20px 20px 0px 20px", sm: 0 }, // 100% width on extra-small devices, 250px on small and larger devices
    }}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          fontSize: "0.875rem",
          color: "text.secondary",
        }}
      >
        <span>{`${value[0]}`}</span>
        <span>{`${value[1]}`}</span>
      </Box>
    </Box>
  );
}
