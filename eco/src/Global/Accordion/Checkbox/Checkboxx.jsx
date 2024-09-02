import React from "react";
import Checkbox from "@mui/material/Checkbox";

const Checkboxes = ({ onChange, checked }) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return <Checkbox checked={checked} onChange={handleChange} />;
};

export default Checkboxes;
