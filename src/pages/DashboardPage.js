import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import axios from 'axios';
import Search from '../components/Dashboard/Search';



function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter((items) =>
    items.name.toLowerCase().includes(search.toLowerCase()) || items.symbol.toLowerCase().includes(search.toLowerCase())
  );
  

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&x_cg_api_key=CG-ngu3LV1buWaxTyKDjQi3oU7f';
  const options = {method: 'GET', headers: {accept: 'application/json'}};



  useEffect(() => {
    axios(url, options)
      .then(response => {
        setCoins(response.data);
      })
      .catch(error => {
        console.error('error:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Search search = {search} onSearchChange={onSearchChange}/>
      <TabsComponent coins={filteredCoins} />
    </div>
  );
}

export default DashboardPage;
