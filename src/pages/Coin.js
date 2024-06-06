import axios from 'axios';
import React, { useEffect ,useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import { coinObject } from '../functions/coinObject';
import List from '../components/Dashboard/List';

function CoinPage() {
    const { coinID } = useParams();
    const [coinData,setCoin] = useState();
    const [isLoading,setLoading] = useState(true);

    const url = `https://api.coingecko.com/api/v3/coins/${coinID}?x_cg_api_key=CG-ngu3LV1buWaxTyKDjQi3oU7f`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    useEffect(() => {
        if (coinID) {
            axios(url, options)
                .then(response => {
                    // console.log(response.data);
                    coinObject(response.data,setCoin);
                    console.log(coinData);
                    setLoading(false);
                }).catch(error => {
                    console.error('error:', error);
                    setLoading(false)
                });
        }
    }, [coinID]);


    return (
        <div>
            <Header/>
            {isLoading?<Loader/>:<>
                <div className = "grey-wrapper">
                    <List coin = {coinData} hover = {false}/>
                </div>
            </>}
        </div>
    );
}

export default CoinPage;
