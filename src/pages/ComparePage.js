import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import SelectCoin from '../components/ComparePage/SelectCoins'
import SelectDays from '../components/Coin/SelectDays';
import { setChartData } from '../functions/settingChart';
import { getCoinData } from '../functions/getCoinData';
import { coinObject } from '../functions/coinObject';
import { getCoinPrices } from '../functions/getCoinPrices';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import LineChart from '../components/Coin/LineChart';
import ToggleButtons from '../components/Coin/Pricetype';
import { getCurrentTime } from '../functions/getCurrentTime';
import { getTwoPrice } from '../functions/getTwoPrice';

function ComparePage() {
    const [coin1,setcoin1] = useState("bitcoin");
    const [coin2,setcoin2] = useState("ethereum");
    const [days,setdays] = useState(60);
    const [coindata1,setcoin1data] = useState([]);
    const [coindata2,setcoin2data] = useState([]);
    const [chartData,setChartDate] = useState([]);
    const [isLoading,setLoading] = useState([]);
    const [pricetype,setpricetype] = useState("prices")
    const [coincache,setcoincache] = useState(new Map())

    const handledaychange = async (event) => {
        setdays(event.target.value)
        try {
            await getTwoPrice(coin1,coin2,event.target.value,pricetype,setChartDate);
        }
        catch{
            alert("Network Error(API) Try Again After Some Time")
        }
        // console.log(event.target.value)
    }

    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        setLoading(true);
        // const data1 = await getCoinData(coin1);
        // const data2 = await getCoinData(coin2);
        // if(data1) {
        //     coinObject(data1,setcoin1data);
        //     const coin1dcache = {
        //         coindata: data1,
        //         time: getCurrentTime()
        //     }
        //     setcoincache();
        //     // coin1dcache.insert
        // }
        // if(data2) {
        //     coinObject(data2,setcoin2data);
        // }
        // if(data1 && data2) {
        //     const prices1 = await getCoinPrices(coin1,days,pricetype);
        //     const prices2 = await getCoinPrices(coin2,days,pricetype);
        //     setChartData(setChartDate,prices1,prices2);
        //     if(prices1 && prices2) {
        //         console.log("ok done");
        //         setLoading(false);
        //     }
        // }
        // setLoading(false);

        let data1 = coincache.get(coin1);
        let data2 = coincache.get(coin2);

        if (!data1) {
            data1 = await getCoinData(coin1);
            if (data1) {
                setcoincache((prevCache) => {
                const newCache = new Map(prevCache);
                newCache.set(coin1, data1);
                return newCache;
                });
            }
        }
      
        if (!data2) {
            data2 = await getCoinData(coin2);
            if (data2) {
                setcoincache((prevCache) => {
                    const newCache = new Map(prevCache);
                    newCache.set(coin2, data2);
                    return newCache;
                });
            }
        }

        if (data1) {
            coinObject(data1, setcoin1data);
        }
      
        if (data2) {
            coinObject(data2, setcoin2data);
        }

        if (data1 && data2) {
            await getTwoPrice(coin1,coin2,days,pricetype,setChartDate);
            setLoading(false);
         }
    }

    const handlechange = async (event,isCoin2) => {
        setLoading(true)
        if(!isCoin2){
            setcoin1(event.target.value);
            let data = coincache.get(event.target.value);
            if(!data) {
                data = await getCoinData(event.target.value);
                setcoincache((prevCache) => {
                    const newCache = new Map(prevCache);
                    newCache.set(event.target.value, data);
                    return newCache;
                });
                coinObject(data,setcoin1data);
            
            }
            else{
                coinObject(data,setcoin1data);
            }
        }
        else{ 
            setcoin2(event.target.value)
            let data = coincache.get(event.target.value);
            if(!data) {
                data = await getCoinData(event.target.value);
                setcoincache((prevCache) => {
                    const newCache = new Map(prevCache);
                    newCache.set(event.target.value, data);
                    return newCache;
                });
                coinObject(data,setcoin2data);
            }
            else {
                coinObject(data,setcoin2data);
            }
        }
        if(coin1 && coin2) {
            await getTwoPrice(coin1,coin2,days,pricetype,setChartDate);
            setLoading(false);
        }

      }

      const handlepricetypechange = async (event,item) => {
        setLoading(true);
        setpricetype(item);
        var prices1 = await getCoinPrices(coin1,days,item);
        var prices2 = await getCoinPrices(coin2,days,item);
        if(prices1 && prices2) {
            setChartData(setChartDate,prices1,prices2);
            setLoading(false);
        }
      }

  return (
    <div>
        <Header/>
        {isLoading?<Loader/>:
        <>
            <div className = "coin-days-flex">
                <SelectCoin coin1 = {coin1} coin2 = {coin2} handlechange={handlechange}/>
                <SelectDays days = {days} handledaychange={handledaychange} noptag={true}/>
            </div>
            <div className = "align-link grey-wrapper"style={{padding:"0rem 1rem"}}>
                    <List coin = {coindata1} hover = {false}/>
            </div>
            <div className = "align-link grey-wrapper"style={{padding:"0rem 1rem"}}>
                    <List coin = {coindata2} hover = {false}/>
            </div>
            <div className = "grey-wrapper line-chart">
                    <ToggleButtons prices = {pricetype} handlepricetypechange={handlepricetypechange}/>
                    <LineChart chartData={chartData} pricetype = {pricetype} multiAxis={true}/>
                </div>
            <CoinInfo heading = {coindata1.name} desc = {coindata1.desc}/>
            <CoinInfo heading = {coindata2.name} desc = {coindata2.desc}/>
        </>
        }
    </div>
  )
}

export default ComparePage