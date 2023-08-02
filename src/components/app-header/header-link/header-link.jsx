import React from 'react'
import styles from "./header-link.module.css"
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

function HeaderLink(props) {
  const { linkText, icon, link, className } = props;

  const setActiveLinkStyle = ({isActive}) => {
   return isActive ? '' : 'text_color_inactive';
  }

  return (
    <NavLink className={['mt-4 mb-4', styles.header_link, className, setActiveLinkStyle].join(" ")} to={link} >
      <div className={['ml-5 mr-5', styles.link_content].join(" ")}>
        {icon}
        <span className={['text text_type_main-default ml-2', styles.span].join(" ")}>{linkText}</span>
      </div>
    </NavLink>
  )
}

HeaderLink.propTypes = {
  linkText: PropTypes.string,
  icon: PropTypes.object,
  className: PropTypes.string,
  link: PropTypes.string
};

export default HeaderLink