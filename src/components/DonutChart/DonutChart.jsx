import React, { useState, useEffect } from "react"
import styles from "./DonutChart.module.css"
import { Line, Doughnut } from "react-chartjs-2"
import { secondsConverter } from "../../utils/secondsConverter"

const DonutChart = ({
  bigTotal,
  activeCategoryTotal,
  subCategoryTotal,
  categoryValues,
}) => {
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
            "rgba(155, 123, 419, 0.402)",
            "rgba(205, 113, 149, 0.402)",
            "rgba(255, 13, 4, 0.402)",
          ],
          bordeWidth: 4,
        },
      ],
    })
  }
  useEffect(() => {
    chart()
  }, [bigTotal, categoryValues])

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
      <div>{SessionTimeDisplay(bigTotal)}</div>
      <div>
        {activeCategoryTotal > 0 && SessionTimeDisplay(activeCategoryTotal)}
      </div>
      <div>{subCategoryTotal > 0 && SessionTimeDisplay(subCategoryTotal)}</div>
      <Doughnut data={chartData}></Doughnut>
    </div>
  )
}

export default DonutChart
