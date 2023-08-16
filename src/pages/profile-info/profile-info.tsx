import { EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react'
import styles from './profile-info.module.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../../components/api/api'
import { setVisitor } from '../../services/reducers/userSlice'

function ProfileInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state: any) => state.user.user.name);
  const userEmail = useSelector((state: any) => state.user.user.email);

  const goToEdit = () => {
    navigate('/profile/edit');
  }

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState("");

  const onChangeName: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setName(evt.target.value);
    goToEdit();
  };
  const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setEmail(evt.target.value);
    goToEdit();
  };
  const onChangePassword: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setPassword(evt.target.value);
    goToEdit();
  };

  const updateInfo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    return editUser(email, password, name).then(res => {
        if (res && res.success) {
            navigate('/profile');
            dispatch(setVisitor());
        } else {
            return Promise.reject("Ошибка данных с сервера");
        }
    })
        .catch(err => {
            console.log(err)
        })
}

  return (
    <form onSubmit={updateInfo}>
      <fieldset className={styles.profile_info}>
        <Input type='text' placeholder={'Имя'} value={name} icon='EditIcon' onChange={onChangeName} />
        <EmailInput name='email' placeholder={'Логин'} value={email} isIcon={true} onChange={onChangeEmail} />
        <PasswordInput placeholder={'Пароль'} value={password} onChange={onChangePassword} />
      </fieldset>
      <Outlet />
    </form>
  )
}

export default ProfileInfo