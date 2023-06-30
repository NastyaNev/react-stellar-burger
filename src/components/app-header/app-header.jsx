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
        <HeaderLink icon={<BurgerIcon type="primary" />} linkText="Конструктор" />
        <HeaderLink icon={<ListIcon type="primary" />} linkText="Лента заказов" />
        <Logo />
        <HeaderLink icon={<ProfileIcon type="primary" />} linkText="Личный кабинет" />
    </header>
  )
}

export default AppHeader