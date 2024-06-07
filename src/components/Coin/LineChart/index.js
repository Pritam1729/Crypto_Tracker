import { Interaction } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto'

function LineChart({chartData, priceType, multiAxis}) {
    
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
            responsive: true,
            interaction: {
                mode: "index",
                intesect: false
            }
        }
    }

  return <Line data = {chartData} options={options}/>
  
}

export default LineChart