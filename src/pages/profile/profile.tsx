import React from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import styles from './profile.module.css'
import { logout } from '../../utils/api';
import { setVisitor } from '../../services/reducers/userSlice';
import { Tuser } from '../../utils/types/types';
import { useAppDispatch } from '../../hooks';

function Profile() {
  const setActiveLinkStyle = ({isActive}: {isActive: Boolean;}): string => {
    return isActive ? `mt-20 text text_type_main-medium ${styles.profile_link} text_color_primary`
      : `mt-20 text text_type_main-medium ${styles.profile_link} text_color_inactive`;
  }

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const signOut = (user: Tuser) => {
    return logout().then(res => {
      if (res && res.success) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        dispatch(setVisitor(user = null));
        navigate("/login");
      } else {
        return Promise.reject("Ошибка данных с сервера");
      }
    })
      .catch(err => {
        console.log(err)
      }) 
  }

  return (
    <div className={['ml-9', styles.profile].join(" ")}>
      <div className={['mt-30',styles.profile_menu_section].join(' ')}>
        <div className={styles.profile_menu}>
          <NavLink to='/profile' className={setActiveLinkStyle({isActive: ['/profile', '/profile/edit'].includes(pathname)})} end>Профиль</NavLink>
          <NavLink to='/profile/orders' className={setActiveLinkStyle}>История заказов</NavLink>
          <button onClick={() => signOut(null)} className={['mt-20 text text_type_main-medium text_color_inactive', styles.profile_button].join(" ")}>Выход</button>
        </div>
        <p className={['mt-20 text text_type_main-small text_color_inactive', styles.profile_paragraph].join(" ")}>В этом разделе  вы можете изменить свои персональные данные</p>
      </div>
      <div className={'ml-15'}>
        <Outlet />
      </div>
    </div>
  )
}

export default Profile