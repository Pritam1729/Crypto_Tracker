import axios from 'axios';
import React, { useEffect ,useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import { coinObject } from '../functions/coinObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/Coin/LineChart';
import { convertDate } from '../functions/convertDate';
import SelectDays from '../components/Coin/SelectDays';
import { Settings } from '@mui/icons-material';
import { setChartData } from '../functions/settingChart';

function CoinPage() {
    const { coinID } = useParams();
    const [coinData,setCoin] = useState();
    const [isLoading,setLoading] = useState(true);
    const [days,setDays] = useState(7);
    const [chartData,setChartDate] = useState({});

    useEffect(() => {
        if (coinID) {
            getData()
        }
    }, [coinID]);


    async function getData() {
        const data = await getCoinData(coinID);
        if(data) {
            coinObject(data,setCoin);
        }
        const prices = await getCoinPrices(coinID,days);
        console.log(prices)
        if(prices.length > 0) {
            console.log(prices)
            setChartData(setChartDate, prices);
            setLoading(false)
        }
    }

    const handlechange = async (event) => {
        // setLoading(true);
        setDays(event.target.value);
        const prices = await getCoinPrices(coinID,event.target.value);
        console.log(prices)
        if(prices.length > 0) {
            console.log(prices)
            setChartData(setChartDate, prices);
            setLoading(false);
        }
    };


    return (
        <div>
            <Header/>
            {isLoading?<Loader/>:<>
                <div className = "grey-wrapper"style={{padding:"0rem 1rem"}}>
                    <List coin = {coinData} hover = {false}/>
                </div>
                <div className = "grey-wrapper">
                    <SelectDays days = {days} handledaychange={handlechange}/>
                    <LineChart chartData={chartData}/>
                </div>
                <CoinInfo heading = {coinData.name} desc = {coinData.desc}/>
            </>}
        </div>
    );
}

export default CoinPage;
