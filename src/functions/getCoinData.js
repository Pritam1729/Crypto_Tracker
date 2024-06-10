import axios from "axios";


const CPI1 = "CG-rjmLcBMdsAeok4woaQurdHuV";
const CPI =  "CG-ngu3LV1buWaxTyKDjQi3oU7f"

export const getCoinData = (coinID) => {

    const url = `https://api.coingecko.com/api/v3/coins/${coinID}?x_cg_api_key=${CPI}`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };


    const myData = axios(url, options)
    .then(response => {
        return response.data;
    }).catch(error => {
        console.error('error:', error);
    });

    return myData;

}