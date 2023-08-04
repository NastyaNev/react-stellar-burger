import React from 'react'
import styles from './reset-password.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'

function ResetPassword() {
    return (
        <div className={['mt-20', styles.reset_password].join(" ")}>
            <div className={styles.reset_password_form_container}>
                <h2 className={'text text_type_main-medium'}>Восстановление пароля</h2>
                <PasswordInput placeholder = 'Введите новый пароль' />
                <Input placeholder = 'Введите код из письма' />
                <Button>Сохранить</Button>
            </div>
            <div className={['mt-20', styles.reset_password_paragraph_container].join(" ")}>
                <p className={['text text_type_main-small text_color_inactive', styles.reset_password_paragraph].join(' ')}>Вспомнили пароль?</p>
                <Link to="/login" className={['text text_type_main-small text_color_accent ml-2', styles.reset_password_link].join(' ')}>Войти</Link>
            </div>
        </div>
    )
}

export default ResetPassword