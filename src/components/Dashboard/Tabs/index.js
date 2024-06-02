// import * as React from 'react';
import React, { useState } from "react";
// import div from '@mui/material/div';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Box, createTheme, ThemeProvider} from '@mui/material';


const theme = createTheme({
    palette: {
        primary: {
            main: "#3a80e9"
        }
    }
})


const style = {
    color: "var(--white)",
    width: "50vh",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize"
}

export default function TabsComponent() {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth">
            <Tab label="Grid" value="grid" sx = {style}/>
            <Tab label="List" value="list" sx = {style}/>
          </TabList>
        <TabPanel value="grid">Grid</TabPanel>
        <TabPanel value="list">List</TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}