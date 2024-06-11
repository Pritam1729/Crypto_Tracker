// import axios from "axios";

// const CPI1 = "CG-rjmLcBMdsAeok4woaQurdHuV"
// const CPI = "CG-6a2YbEFBYY6sZRwymGByEYmi"

// export const getCoinPrices = (id,days,newType) => {

//     const url2 = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&x_cg_api_key=${CPI1}`;
//     const options = { method: 'GET', headers: { accept: 'application/json' }};

//     try{
//         const data =  axios(url2,options)
//             .then(response => {
//                 return response.data[newType];
//             })
//             .catch(error => {
//                 console.log('error:',error)
//             })
//         return data;
//     }
//     catch {
//         alert("Network Error(Try Again After Some Time)");
//     }
// }


import axios from 'axios';

const CPI1 = "CG-rjmLcBMdsAeok4woaQurdHuV";
const CPI = "CG-6a2YbEFBYY6sZRwymGByEYmi";

export const getCoinPrices = async (id, days, newType) => {
    const url2 = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&x_cg_api_key=${CPI1}`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    try {
        const response = await axios(url2, options);
        return response.data[newType];
    } catch (error) {
        // console.error('Error:', error);
        // throw new Error("Network Error(Try Again After Some Time)");
        alert("Network Error Try Again After Some Time");
    }
};
