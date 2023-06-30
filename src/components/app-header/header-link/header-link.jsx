import React from 'react'
import styles from "./header-link.module.css"

function HeaderLink(props) {
  const { linkText, icon } = props;
  return (
    <a className={styles.header_link} href="">
      <span className={styles.text}>{icon}{linkText}</span>
    </a>
  )
}

export default HeaderLink