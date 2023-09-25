
import React,{useState} from 'react'
import Chart from "react-apexcharts";
import './History.css'

export default function History() {
  const [state,setState]=useState({
    options: {
      chart: {
        id:"basic-bar"
      },
      xaxis: {
        categories: ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      },
      colors: ["black","black","black","black","black","black"],       
    },
    series: [
      {
        name: "series-1",
        data: [2.5,1.7,2.1,3.4,4.0,3.0]
      }
    ]
  }
)
  return (
    <div className="hisfull">
   
    <div className='chart'>
    <div className='row'>
        <div className='col-4'>
        <Chart
          options={state.options}
          series={state.series}
          type="area"
          width="900"
          height={400}
        />
        </div>
    </div>
</div>
</div>
  )
}
