import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./styles.css"
export default function ToggleButtons({pricetype,handlepricetypechange}) {

  return (
    <div className = "toggle-prices" >
    <ToggleButtonGroup
      value={pricetype}
      exclusive
      onChange={handlepricetypechange}
      sx={{
        "&.Mui-selected": {
          color: "var(--blue) !important",
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid var(--blue)!important",
          borderColor: "unset",
          color: "var(--blue) !important ",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--blue) !important",
        },
      }}
    >
        
      <ToggleButton value="prices" className = "toggle-btn">
            <p>Price</p>
      </ToggleButton>
      <ToggleButton value="total_volumes" className = "toggle-btn">
            <p>Volume</p>
      </ToggleButton>
      <ToggleButton value="market_caps" className = "toggle-btn">
            <p>Market Cap</p>
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}
