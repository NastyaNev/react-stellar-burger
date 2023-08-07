import React from 'react'
import styles from './register.module.css'
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className={['mt-20', styles.register].join(" ")}>
            <div className={styles.register_form_container}>
                <h2 className={'text text_type_main-medium'}>Регистрация</h2>
                <Input placeholder={'Имя'} value='1' />
                <EmailInput value='1' />
                <PasswordInput value='1' />
                <Button>Зарегистрироваться</Button>
            </div>
            <div className={['mt-20', styles.register_paragraph_container].join(" ")}>
                <p className={['text text_type_main-small text_color_inactive', styles.register_paragraph].join(' ')}>Уже зарегистрированы?</p>
                <Link to="/login" className={['text text_type_main-small text_color_accent ml-2', styles.register_link].join(' ')}>Войти</Link>
            </div>
        </div>
    )
}

export default Register