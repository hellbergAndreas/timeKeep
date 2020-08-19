import React from "react"

import styles from "./MenuLink.module.css"
import { connect } from "react-redux"
import { toggleHidden } from "../../redux/openWindows/window.action"
const MenuLink = ({ name, to, hover, children, hidden, toggleHidden }) => {
  return (
    <div onMouseEnter={hover()} onMouseLeave={hover()} className={styles.link}>
      <div className={styles.linkName}>{name}</div>
      <div onClick={() => toggleHidden(!hidden)}>{children}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  hidden: state.hidden.addCategory,
})
const mapDispatchToProps = (dispatch) => ({
  toggleHidden: (hidden) => dispatch(toggleHidden(hidden)),
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuLink)
