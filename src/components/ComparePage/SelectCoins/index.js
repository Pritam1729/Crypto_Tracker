import React, { useEffect, useState } from 'react'
import { get100coin } from '../../../functions/get100Coin'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./styles.css"

function SelectCoin({coin1,coin2,handlechange}) {
    const [allcoin,setallcoin] = useState([])


    const styles = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
          color: "var(--white)",
        },
        "&:hover": {
          "&& fieldset": {
            borderColor: "#3a80e9",
          },
        }
      }


      useEffect(() => {
            getData();
            console.log(coin1);
            console.log(coin2);
      },[])

      const getData = async() => {
        const coindata = await get100coin();
        if(coindata) {
            setallcoin(coindata);
        }
      }


  return (
    <div className = "coin-flex">
        <p>Crypto 1</p>
        <Select
          value={coin1}
          label="Crypto-1"
          onChange={(event) => handlechange(event,false)}
          sx={styles}
        >
            {allcoin.map((coin,i) => <MenuItem key = {i} value={coin.id}>{coin.name}</MenuItem>)}
        </Select>
        <p>Crypto 2</p>
        <Select
          value={coin2}
          label="Crypto-2"
          onChange={(event) => handlechange(event,true)}
          sx={styles}
        >
            {allcoin.map((coin,i) => <MenuItem key = {i} value={coin.id}>{coin.name}</MenuItem>)}
        </Select>
    </div>
  )
}

export default SelectCoin