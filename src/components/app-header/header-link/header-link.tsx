import React from 'react'
import styles from "./header-link.module.css"
import { NavLink } from 'react-router-dom';

type THeaderLinkProps = {
  linkText: string;
  link: string;
  icon: JSX.Element;
  className?: string;
}

function HeaderLink(props: THeaderLinkProps) {
  const { linkText, icon, link, className } = props;
  const setActiveLinkStyle = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `mt-4 mb-4 ${styles.header_link} ${(className)} text_color_primary`
      : `mt-4 mb-4 ${styles.header_link} ${(className)} text_color_inactive`;
  }

  return (
    <NavLink className={setActiveLinkStyle} to={link}>
      <div className={['ml-5 mr-5', styles.link_content].join(" ")}>
        {icon}
        <span className={['text text_type_main-default ml-2', styles.span].join(" ")}>{linkText}</span>
      </div>
    </NavLink>
  )
}

export default HeaderLink