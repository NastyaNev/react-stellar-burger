import React from 'react'
import styles from "./header-link.module.css"

function HeaderLink(props) {
  const { linkText, icon, link, className } = props;
  return (
    <a className={['mt-4 mb-4', styles.header_link, className].join(" ")} href={link} target='_blank'>
      <div className={['ml-5 mr-5', styles.link_content].join(" ")}>
        {icon}
        <span className={['text text_type_main-default ml-2', styles.span].join(" ")}>{linkText}</span>
      </div>
    </a>
  )
}

export default HeaderLink