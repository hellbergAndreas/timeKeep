import React, { useState } from "react"
import styles from "./NavBar.module.css"
import MenuLink from "../../components/menuLink/MenuLink"
import CreateMenu from "../createMenu/CreateMenu"

const NavBar = () => {
  const [createMenuHidden, setCreateMenuHidden] = useState(true)
  const onHover = (event) => {
    if (event.type === "mouseenter") {
      setCreateMenuHidden(false)
    }
    if (event.type === "mouseleave") {
      setCreateMenuHidden(true)
    }
  }
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>timeKeep</div>

      <div className={styles.menu}>
        <MenuLink name="Get Started" hover={() => onHover}>
          {createMenuHidden ? null : <div>{<CreateMenu></CreateMenu>}</div>}
        </MenuLink>
      </div>
    </div>
  )
}
export default NavBar
