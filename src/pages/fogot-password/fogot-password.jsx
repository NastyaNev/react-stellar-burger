import React, { useState } from 'react'
import styles from './fogot-password.module.css'
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'

function FogotPassword() {
    const [email, setEmail] = useState("");
    
    const onChangeEmail = (evt) => {
        setEmail(evt.target.value);
    };

    return (
        <div className={['mt-20', styles.fogot_password].join(" ")}>
            <div className={styles.fogot_password_form_container}>
                <h2 className={'text text_type_main-medium'}>Восстановление пароля</h2>
                <EmailInput placeholder = 'Укажите e-mail' type='email' value={email} onChange={onChangeEmail}  />
                <Link state='1' to={'/reset-password'}><Button htmlType="button">Восстановить</Button></Link>
            </div>
            <div className={['mt-20', styles.fogot_password_paragraph_container].join(" ")}>
                <p className={['text text_type_main-small text_color_inactive', styles.fogot_password_paragraph].join(' ')}>Вспомнили пароль?</p>
                <Link to="/login" className={['text text_type_main-small text_color_accent ml-2', styles.fogot_password_link].join(' ')}>Войти</Link>
            </div>
        </div>
    )
}

export default FogotPassword