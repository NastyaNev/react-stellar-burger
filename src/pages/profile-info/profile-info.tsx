import { EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState, FormEvent } from 'react'
import styles from './profile-info.module.css'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../../components/api/api'
import { setVisitor } from '../../services/reducers/userSlice'
import { CustomNameInput } from './custom-name-input/custom-name-input'

function ProfileInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state: any) => state.user.user.name);
  const userEmail = useSelector((state: any) => state.user.user.email);
  const { pathname } = useLocation();

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

  const updateInfo = (e: FormEvent<HTMLFormElement>, user: {name: string, email: string} | null) => {
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