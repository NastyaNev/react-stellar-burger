import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react'
import styles from './profile-info.module.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { editUser } from '../../utils/api'
import { setVisitor } from '../../services/reducers/userSlice'
import { CustomNameInput } from './custom-name-input/custom-name-input'
import { TformEvent, TinputEvent, Tuser } from '../../utils/types'
import { useAppDispatch, useAppSelector } from '../../hooks';


function ProfileInfo() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.user!.name);
  const userEmail = useAppSelector((state) => state.user.user!.email);

  const goToEdit = () => {
    navigate('/profile/edit');
  }

  const [name, setName] = useState<string>(userName);
  const [email, setEmail] = useState<string>(userEmail);
  const [password, setPassword] = useState<string>("");

  const onChangeName = (evt: TinputEvent) => {
    setName(evt.target.value);
    goToEdit();
  };
  const onChangeEmail = (evt: TinputEvent) => {
    setEmail(evt.target.value);
    goToEdit();
  };
  const onChangePassword = (evt: TinputEvent) => {
    setPassword(evt.target.value);
    goToEdit();
  };

  const updateInfo = (e: TformEvent, user: Tuser) => {
    e.preventDefault();
    return editUser(email, password, name).then(res => {
        if (res && res.success) {
            navigate('/profile');
            dispatch(setVisitor(user));
        } else {
            return Promise.reject("Ошибка данных с сервера");
        }
    })
        .catch(err => {
            console.log(err)
        })
}

  return (
    <form onSubmit={(e) => updateInfo(e, null)}>
      <fieldset className={styles.profile_info}>
        <CustomNameInput name='name' placeholder={'Имя'} value={name} isIcon={true} onChange={onChangeName} />
        <EmailInput name='email' placeholder={'Логин'} value={email} isIcon={true} onChange={onChangeEmail} />
        <PasswordInput placeholder={'Пароль'} value={password} onChange={onChangePassword} />
      </fieldset>
      <Outlet />
    </form>
  )
}

export default ProfileInfo