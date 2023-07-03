import React from 'react'
import HeaderLink from "./header-link/header-link"
import styles from "./app-header.module.css"
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
  return (
    <header className={styles.header}>
        <div className={styles.two_links_container}>
          <HeaderLink icon={<BurgerIcon type="primary" />} linkText="Конструктор" link="" />
          <HeaderLink className='ml-2 text_color_inactive' icon={<ListIcon type="secondary" />} linkText="Лента заказов" link="" />
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <HeaderLink className='text_color_inactive' icon={<ProfileIcon type="secondary" />} linkText="Личный кабинет" link="" />
    </header>
  )
}

export default AppHeader