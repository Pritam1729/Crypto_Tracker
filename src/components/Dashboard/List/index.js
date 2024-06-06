import React from 'react'
import "./styles.css"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Tooltip from '@mui/material/Tooltip';
import { convertNumbers } from '../../../functions/convertNunbers';
import { Link } from 'react-router-dom';

function List({coin,hover}) {
  return (
        <Link to = {`/coin/${coin.id}`}>
          <tr className = {hover?"list-row":"no-hover-list"}>
          <Tooltip title="image">
            <td className = "td-image">
              <img src = {coin.image} className = "coin-logo font-change"></img>
            </td>
          </Tooltip>
          <td>
            <div className='name-col'>
                <Tooltip title="symbol" placement='top-start'>
                  <p className="coin-symbol font-change">{coin.symbol}</p>
                </Tooltip>
                <Tooltip title = "name" placement="bottom-start">
                  <p className='coin-name font-change'>{coin.name}</p>
                </Tooltip>
            </div>
           </td>
           <Tooltip title = "price change in 24hr" placement='bottom-start'>
          {coin.price_change_percentage_24h.toFixed(2)>=0 ? (
            <td className = "chip-flex">
                <div className = "price-chip-green font-change price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                <div className="icon-chip td-icon font-change">
                  <TrendingUpIcon/>
                </div>
            </td>
          ):
          (
            <td className = "chip-flex">
              <div className = "price-chip-red font-change price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
              <div className="icon-chip chip-red td-icon font-change">
                  <TrendingDownIcon/>
              </div>
            </td>
          )}
          </Tooltip>
          <Tooltip>
            <td>
              <h3 className = "coin-price td-center-align td-total-volume font-change" style = {{color: coin.price_change_percentage_24h.toFixed(2)>=0?"var(--green)":"var(--red)"}}>${coin.current_price.toLocaleString()}</h3>
            </td>
          </Tooltip>
          <Tooltip title = "Total Volume" placement='bottom-end'>
          <td className = "volume-coin">
            <p className = "total_volume td-right-align font-change">{coin.total_volume.toLocaleString()}</p>
          </td>
          </Tooltip>
          <Tooltip title = "Total Market Cap" placement = "bottom-end">
          <td className = "desktop-td-mkt">
            <p className = "total_volume td-right-align font-change">{coin.market_cap.toLocaleString()}</p>
          </td>
          </Tooltip>
          <Tooltip title = "Total Market Cap" placement = "bottom-end">
          <td className = "mobile-td-mkt">
            <p className = "total_volume td-right-align font-change">{convertNumbers(coin.market_cap)}</p>
          </td>
          </Tooltip>

        </tr>
        </Link>
  )
}

export default List
