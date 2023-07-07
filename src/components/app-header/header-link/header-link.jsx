import React from 'react'
import styles from "./header-link.module.css"
import PropTypes from 'prop-types'

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

HeaderLink.propTypes = {
  linkText: PropTypes.string,
  icon: PropTypes.object,
  className: PropTypes.string,
};

export default HeaderLink