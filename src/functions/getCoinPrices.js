import axios from "axios";

export const getCoinPrices = (id,days) => {

    const url2 = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&x_cg_api_key=CG-rjmLcBMdsAeok4woaQurdHuV`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    const prices = axios(url2,options)
            .then(response => {
                return response.data.prices;
            })
            .catch(error => {
                console.log('error:',error)
            })

    return prices;
}