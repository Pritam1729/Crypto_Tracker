import axios from "axios";

export const get100coin = () => {

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&x_cg_api_key=CG-ngu3LV1buWaxTyKDjQi3oU7f';
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    try {
        const coindata = axios(url, options)
        .then(response => {
          return response.data
        })
        .catch(error => {
          console.error('error:', error);
        });
    
      return coindata;
    }
    catch {
        alert("Network Error(Try Again After some Time")
    }
}