import { EditIcon, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import styles from './profile-info.module.css'
import { Outlet, useNavigate } from 'react-router-dom'

function ProfileInfo() {
  const navigate = useNavigate();

  const goToEdit = () => {
    navigate('/profile/edit');
  }

  return (
    <>
      <div className={styles.profile_info}>
        <Input placeholder={'Имя'} value='ddd' icon='EditIcon' onIconClick={goToEdit} />
        <EmailInput placeholder={'Логин'} value='dc' icon='EditIcon' onIconClick={goToEdit} />
        <Input placeholder={'Пароль'} value='ddd' icon='EditIcon' onIconClick={goToEdit} />
      </div>
      <Outlet />
    </>
  )
}

export default ProfileInfo