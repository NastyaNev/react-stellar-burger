import { EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import styles from './profile-info.module.css'

function ProfileInfo() {
    return (
      <div className={styles.profile_info}>
        <Input placeholder={'Имя'} value={"jlrf"} icon = 'EditIcon' />
        <EmailInput placeholder={'Логин'} value={"jlrf"} icon = 'EditIcon' />
        <PasswordInput value={"jlrf"} icon = 'EditIcon' />
      </div>
    )
  }

  export default ProfileInfo