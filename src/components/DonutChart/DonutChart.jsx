import React, { useState, useEffect } from "react"
import styles from "./DonutChart.module.css"
import { Line, Doughnut } from "react-chartjs-2"

const DonutChart = ({ totals, categoryValues }) => {
  const [chartData, setChartData] = useState()

  const chart = () => {
    const keys = Object.keys(categoryValues)
    const values = Object.values(categoryValues)

    setChartData({
      labels: keys,
      datasets: [
        {
          label: "time spent",
          data: values,
          backgroundColor: [
            "rgba(38, 38, 197, 0.479)",
            "rgba(202, 32, 32, 0.424)",
            "rgba(255, 193, 49, 0.402)",
          ],
          bordeWidth: 4,
        },
      ],
    })
  }
  useEffect(() => {
    chart()
  }, [totals])

  return (
    <div>
      <Doughnut data={chartData}></Doughnut>
    </div>
  )
}

export default DonutChart
