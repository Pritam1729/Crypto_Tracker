import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import axios from 'axios';
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/Pagination';



function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [pagenatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page,setPage] = useState(1);

  const handlePageChange= (event,value) => {
    setPage(value);
    var previousIndex = (value-1)*10;
    setPaginatedCoins(coins.slice(previousIndex,previousIndex+10));
  } 

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
        setPaginatedCoins(response.data.slice(0,10));
      })
      .catch(error => {
        console.error('error:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Search search = {search} onSearchChange={onSearchChange}/>
      <TabsComponent coins={search?filteredCoins:pagenatedCoins} />
      {!search && (<PaginationComponent page = {page} handlePageChange={handlePageChange}/>)}
    </div>
  );
}

export default DashboardPage;
