import { EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react'
import styles from './profile-info.module.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../../components/api/api'
import { SET_USER } from '../../services/actions/user'

function ProfileInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userReducer.user.name);
  const userEmail = useSelector((state) => state.userReducer.user.email);

  const goToEdit = () => {
    navigate('/profile/edit');
  }

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
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

  const updateInfo = (e) => {
    e.preventDefault();
    return editUser(email, password, name).then(res => {
        if (res && res.success) {
            navigate('/profile');
            dispatch({ type: SET_USER });
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
        <Input type='text' placeholder={'Имя'} value={name} icon='EditIcon' onChange={onChangeName} onIconClick={goToEdit} onClick={goToEdit} />
        <EmailInput type='email' placeholder={'Логин'} value={email} icon='EditIcon' onChange={onChangeEmail} onIconClick={goToEdit} onClick={goToEdit} />
        <PasswordInput placeholder={'Пароль'} value={password} onChange={onChangePassword} onClick={goToEdit} />
      </fieldset>
      <Outlet />
    </form>
  )
}

export default ProfileInfo