import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkboxes from "./Checkbox/Checkboxx";
import "./Accordion.css";

export default function AccordionUsage({ setFilters }) {
  // State to track the checked status of each filter
  const [checkedColors, setCheckedColors] = useState({
    red: false,
    blue: false,
    black: false,
    white: false,
  });

  const [checkedCategories, setCheckedCategories] = useState({
    shirt: false,
    tshirt: false,
  });

  const [checkedGenders, setCheckedGenders] = useState({
    male: false,
    women: false,
  });

  // Handle checkbox change event for different filters
  const handleCheckboxChange = (filterType, key, isChecked) => {
    let updatedFilters;
    switch (filterType) {
      case 'color':
        updatedFilters = { ...checkedColors, [key]: isChecked };
        setCheckedColors(updatedFilters);
        break;
      case 'categories':
        updatedFilters = { ...checkedCategories, [key]: isChecked };
        setCheckedCategories(updatedFilters);
        break;
      case 'gender':
        updatedFilters = { ...checkedGenders, [key]: isChecked };
        setCheckedGenders(updatedFilters);
        break;
      default:
        return;
    }

    // Determine which filters are currently checked
    const activeFilters = Object.keys(updatedFilters).filter(c => updatedFilters[c]);

    // Pass the active filters to setFilters
    setFilters(filterType, activeFilters.length ? activeFilters : null);
  };

  return (
    <div className="boxlow">
      <Accordion className="boxlow">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Gender
        </AccordionSummary>
        <AccordionDetails className="chekbo">
          <div className="itemchek">
            <Checkboxes
              onChange={(checked) => handleCheckboxChange('gender', 'male', checked)}
              checked={checkedGenders.male}
            /> Male
          </div>
          <div className="itemchek">
            <Checkboxes
              onChange={(checked) => handleCheckboxChange('gender', 'women', checked)}
              checked={checkedGenders.women}
            /> women
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="boxlow">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Categories
        </AccordionSummary>
        <AccordionDetails className="chekbo">
          <div className="itemchek">
            <Checkboxes
              onChange={(checked) => handleCheckboxChange('categories', 'shirt', checked)}
              checked={checkedCategories.shirt}
            /> Shirt
          </div>
          <div className="itemchek">
            <Checkboxes
              onChange={(checked) => handleCheckboxChange('categories', 'tshirt', checked)}
              checked={checkedCategories.tshirt}
            /> T-Shirt
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="boxlow">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Color
        </AccordionSummary>
        <AccordionDetails className="chekbo">
          <div className="itemchek">
            <Checkboxes
              onChange={(checked) => handleCheckboxChange('color', 'red', checked)}
              checked={checkedColors.red}
            /> Red
          </div>
          <div className="itemchek">
            <Checkboxes
              onChange={(checked) => handleCheckboxChange('color', 'blue', checked)}
              checked={checkedColors.blue}
            /> Blue
          </div>
          <div className="itemchek">
            <Checkboxes
              onChange={(checked) => handleCheckboxChange('color', 'black', checked)}
              checked={checkedColors.black}
            /> Black
          </div>
          <div className="itemchek">
            <Checkboxes
              onChange={(checked) => handleCheckboxChange('color', 'white', checked)}
              checked={checkedColors.white}
            /> White
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
