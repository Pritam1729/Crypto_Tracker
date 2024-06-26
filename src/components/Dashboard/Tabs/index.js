import React, { useState } from "react";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Box, createTheme, ThemeProvider} from '@mui/material';
import Grid from "../Grid";
import List from "../List";
import { motion } from "framer-motion"
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

  let time = 0;

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
                if(i == 0)  time = 0;
                else time = time+0.1;
                console.log(time);
                return  <Grid className = "grid-com" coin = {coin} key = {i}/>
              })}
            </div>
        </TabPanel>
        <TabPanel value="list">
          <table className = "list-table">
            {coins.map((coin,i) => {
              return  <List coin = {coin} className= "list-com" hover = {true} key = {i}/>
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}