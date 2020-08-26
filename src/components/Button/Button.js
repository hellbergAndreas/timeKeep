import React from "react"
import styles from "./button.module.css"
import cx from "classnames"
import { connect } from "react-redux"

export const ButtonShape = {
  ROUND_SMALL: "roundSmall",
  ROUND_LARGE: "roundLarge",
  RECT_SMALL: "rectSmall",
  RECT_LARGE: "rectLarge",
}
const Button = ({
  children,
  click,
  style,
  shape = ButtonShape.RECT_SMALL,
  className,
  isRunning,
  canBeDeactivated,
  mounted,
}) => {
  return (
    <button
      style={style}
      onClick={() => click()}
      disabled={isRunning && canBeDeactivated}
      className={cx(
        mounted && styles.mounted,
        styles[className],
        styles.btn,
        styles[shape],
        {
          [styles.disabled]: canBeDeactivated,
        }
      )}
    >
      {children}
    </button>
  )
}
const mapStateToProps = (state) => ({
  isRunning: state.isRunning.isRunning,
})

export default connect(mapStateToProps)(Button)
