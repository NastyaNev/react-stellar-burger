import React, { useState } from 'react'
import styles from './forgot-password.module.css'
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom'
import { recoverPassword } from '../../components/api/api';

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const onChangeEmail = (evt) => {
        setEmail(evt.target.value);
    };

    const resetPass = (e) => {
        e.preventDefault();
        return recoverPassword(email).then(res => {
            if (res && res.success) {
                navigate('/reset-password', {state:'1'});
            } else {
                return Promise.reject("Ошибка данных с сервера");
            }
        })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form className={['mt-20', styles.forgot_password].join(" ")} onSubmit={resetPass}>
            <fieldset className={styles.forgot_password_form_container}>
                <h2 className={'text text_type_main-medium'}>Восстановление пароля</h2>
                <EmailInput placeholder='Укажите e-mail' type='email' value={email} onChange={onChangeEmail} />
                <Button htmlType="submit" disabled={email === ''}>Восстановить</Button>
            </fieldset>
            <div className={['mt-20', styles.forgot_password_paragraph_container].join(" ")}>
                <p className={['text text_type_main-small text_color_inactive', styles.forgot_password_paragraph].join(' ')}>Вспомнили пароль?</p>
                <Link to="/login" className={['text text_type_main-small text_color_accent ml-2', styles.forgot_password_link].join(' ')}>Войти</Link>
            </div>
        </form>
    )
}

export default ForgotPassword