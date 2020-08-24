import React from "react"
import styles from "./button.module.css"
import cx from "classnames"

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
}) => {
  return (
    <button
      style={style}
      onClick={() => click()}
      className={cx(styles[className], styles.btn, styles[shape])}
    >
      {children}
    </button>
  )
}

export default Button
