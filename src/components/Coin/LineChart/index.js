import { Interaction, scales } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto'
import { callback } from 'chart.js/helpers'
import { convertNumbers } from '../../../functions/convertNunbers'

function LineChart({chartData, pricetype, multiAxis}) {
    
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intesect: false
        },
        scales: {
            crypto1: {
                type:"linear",
                display: true,
                position: "left",
                ticks: {
                    callback: function(value,index,ticks) {
                        if(pricetype =="prices")
                            return "$" + value.toLocaleString();
                        else    
                            return "$" + convertNumbers(value);
                    },
                },
            },
            crypto2: {
                type:"linear",
                display: true,
                position: "right",
                ticks: {
                    callback: function(value,index,ticks) {
                        if(pricetype =="prices")
                            return "$" + value.toLocaleString();
                        else    
                            return "$" + convertNumbers(value);
                    },
                },
            },
        },
    }

  return <Line data = {chartData} options={options}/>
  
}

export default LineChart