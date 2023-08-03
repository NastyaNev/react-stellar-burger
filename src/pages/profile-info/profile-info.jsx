import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import styles from './profile-info.module.css'
import ProfileInfoInput from './profile-info-input/profile-info-input';

function ProfileInfo() {
    return (
      <div className={styles.profile_info}>
        <ProfileInfoInput placeholder={'Имя'} />
        <ProfileInfoInput placeholder={'Логин'} />
        <ProfileInfoInput placeholder={'Пароль'} />
      </div>
    )
  }

  export default ProfileInfo