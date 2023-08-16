import React, { useState } from 'react'
import styles from './reset-password.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NotFound from '../not-found/not-found';
import { setNewPass } from '../../components/api/api';

function ResetPassword() {
    const { state } = useLocation();
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const onChangePassword: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        setPassword(evt.target.value);
    };
    const onChangeToken: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        setToken(evt.target.value);
    };

    const refreshPass = (e: React.SyntheticEvent) => {
        e.preventDefault();
        return setNewPass(password, token).then(res => {
            if (res && res.success) {
                navigate(-2)
            } else {
                return Promise.reject("Ошибка данных с сервера");
            }
        })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        state === null ? <NotFound /> :
            <form className={['mt-20', styles.reset_password].join(" ")} onSubmit={refreshPass}>
                <fieldset className={styles.reset_password_form_container}>
                    <h2 className={'text text_type_main-medium'}>Восстановление пароля</h2>
                    <PasswordInput placeholder='Введите новый пароль' value={password} onChange={onChangePassword} />
                    <Input placeholder='Введите код из письма' type='text' value={token} onChange={onChangeToken} />
                    <Button htmlType="submit" type="primary" size="large">Сохранить</Button>
                </fieldset>
                <div className={['mt-20', styles.reset_password_paragraph_container].join(" ")}>
                    <p className={['text text_type_main-small text_color_inactive', styles.reset_password_paragraph].join(' ')}>Вспомнили пароль?</p>
                    <Link to="/login" className={['text text_type_main-small text_color_accent ml-2', styles.reset_password_link].join(' ')}>Войти</Link>
                </div>
            </form>
    )
}

export default ResetPassword