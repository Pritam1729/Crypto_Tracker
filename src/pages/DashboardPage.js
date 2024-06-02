import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import axios from 'axios';

function DashboardPage() {
  const [coins, setCoins] = useState([]);
;

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&x_cg_api_key=CG-ngu3LV1buWaxTyKDjQi3oU7f';
  const options = {method: 'GET', headers: {accept: 'application/json'}};



  useEffect(() => {
    axios(url, options)
      .then(response => {
        console.log(response.data);
        setCoins(response.data);
      })
      .catch(error => {
        console.error('error:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <TabsComponent coins={coins} />
    </div>
  );
}

export default DashboardPage;
