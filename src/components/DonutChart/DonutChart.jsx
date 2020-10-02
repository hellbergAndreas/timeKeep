import React, { useState, useEffect } from "react"
import styles from "./DonutChart.module.css"
import { Line, Doughnut } from "react-chartjs-2"
import { secondsConverter } from "../../utils/secondsConverter"

const DonutChart = ({
  total,
  categoryTotal,
  subCatTotal,
  chartValues,
  entryTime,
}) => {
  const [chartData, setChartData] = useState()

  const chart = () => {
    if (chartValues) {
      const keys = Object.keys(chartValues)
      const values = Object.values(chartValues)
      console.log()
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
              "rgba(155, 123, 419, 0.402)",
              "rgba(205, 113, 149, 0.402)",
              "rgba(255, 13, 4, 0.402)",
            ],
            bordeWidth: 4,
          },
        ],
      })
    }
  }
  useEffect(() => {
    chart()
  }, [chartValues, entryTime])

  const SessionTimeDisplay = (ss) => {
    let { hours, minutes, seconds } = secondsConverter(ss)
    const lessThan10 = (time) => {
      if (time < 10) {
        return "0"
      }
    }
    return (
      <div className={styles.timeDisplay}>
        {lessThan10(hours)}
        {hours}:{lessThan10(minutes)}
        {minutes}:{lessThan10(seconds)}
        {seconds}
      </div>
    )
  }
  return (
    <div className={styles.deNut}>
      <div>{SessionTimeDisplay(total)}</div>
      <div>{SessionTimeDisplay(categoryTotal)}</div>
      <div>{SessionTimeDisplay(subCatTotal)}</div>
      <Doughnut data={chartData}></Doughnut>
    </div>
  )
}

export default DonutChart
