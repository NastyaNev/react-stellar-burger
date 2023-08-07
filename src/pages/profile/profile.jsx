import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import styles from './profile.module.css'

function Profile() {
  const setActiveLinkStyle = ({ isActive }) => {
    return isActive ? `mt-20 text text_type_main-medium ${styles.profile_link} text_color_primary`
      : `mt-20 text text_type_main-medium ${styles.profile_link} text_color_inactive`;
  }

  const { pathname } = useLocation();


  return (
    <div className={['ml-9 mt-30', styles.profile].join(" ")}>
      <div className={styles.profile_menu_section}>
        <div className={styles.profile_menu}>
          <NavLink to={pathname === '/profile/edit' || '/profile'} className={setActiveLinkStyle} end>Профиль</NavLink>
          <NavLink to='/profile/orders' className={setActiveLinkStyle}>История заказов</NavLink>
          <button className={['mt-20 text text_type_main-medium text_color_inactive', styles.profile_button].join(" ")}>Выход</button>
        </div>
        <p className={['mt-20 text text_type_main-small text_color_inactive', styles.profile_paragraph].join(" ")}>В этом разделе  вы можете изменить свои персональные данные</p>
      </div>
      <div className={'ml-15'}>
        <Outlet />
      </div>
    </div>
  )
}

export default Profile