import { EditIcon, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react'
import styles from './profile-info.module.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function ProfileInfo() {
  const navigate = useNavigate();
  const na = useSelector((state) => state.userReducer.user.name);
  const em = useSelector((state) => state.userReducer.user.email);

  const goToEdit = () => {
    navigate('/profile/edit');
  }

  const [name, setName] = useState(na);
  const [email, setEmail] = useState(em);
  const [password, setPassword] = useState("");
  
  const onChangeName = (evt) => {
    setName(evt.target.value);
};
  const onChangeEmail = (evt) => {
      setEmail(evt.target.value);
  };
  const onChangePassword = (evt) => {
      setPassword(evt.target.value);
  };

  return (
    <>
      <div className={styles.profile_info}>
        <Input type='text' placeholder={'Имя'} value={name} icon='EditIcon' onChange={onChangeName} onIconClick={goToEdit} onClick={goToEdit} />
        <EmailInput type='email' placeholder={'Логин'} value={email} icon='EditIcon' onChange={onChangeEmail} onIconClick={goToEdit} onClick={goToEdit} />
        <PasswordInput placeholder={'Пароль'} value={password} onChange={onChangePassword} onClick={goToEdit} />
      </div>
      <Outlet />
    </>
  )
}

export default ProfileInfo