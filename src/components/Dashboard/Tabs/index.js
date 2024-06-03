import React, { useState } from "react";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Box, createTheme, ThemeProvider} from '@mui/material';
import Grid from "../Grid";
import "./styles.css";


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

export default function TabsComponent({coins}) {
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
        <TabPanel value="grid">
            <div className="grid-flex">
              {coins.map((coin, i) => {
                return  <Grid coin = {coin} key = {i}/>
              })}
            </div>
        </TabPanel>
        <TabPanel value="list">
          <div>{coins.map((item,id) => {
            return <p key = {id}>{id}, {item.name}</p>
          })}</div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}