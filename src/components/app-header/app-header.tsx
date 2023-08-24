import React from 'react'
import HeaderLink from "./header-link/header-link"
import styles from "./app-header.module.css"
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useLocation } from 'react-router-dom'

function AppHeader() {
  const { pathname } = useLocation();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.two_links_container}>
          <HeaderLink icon={<BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />} linkText="Конструктор" link="/" />
          <HeaderLink className='ml-2' icon={<ListIcon type={pathname === "/feed" ? "primary" : "secondary"} />} linkText="Лента заказов" link="/feed" />
        </div>
        <NavLink className={styles.logo} to="/" >
          <Logo />
        </NavLink>
        <HeaderLink icon={<ProfileIcon type={pathname.startsWith("/profile") ? "primary" : "secondary"} />} linkText="Личный кабинет" link="/profile" />
      </header>
    </>
  )
}

export default AppHeader