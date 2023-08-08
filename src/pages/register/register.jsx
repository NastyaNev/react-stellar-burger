import React, { useState } from 'react'
import styles from './register.module.css'
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
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

    return (
        <div className={['mt-20', styles.register].join(" ")}>
            <div className={styles.register_form_container}>
                <h2 className={'text text_type_main-medium'}>Регистрация</h2>
                <Input placeholder={'Имя'} type='text' value={name} onChange={onChangeName} />
                <EmailInput type='email' value={email} onChange={onChangeEmail} />
                <PasswordInput type='password' value={password} onChange={onChangePassword} />
                <Button htmlType="button">Зарегистрироваться</Button>
            </div>
            <div className={['mt-20', styles.register_paragraph_container].join(" ")}>
                <p className={['text text_type_main-small text_color_inactive', styles.register_paragraph].join(' ')}>Уже зарегистрированы?</p>
                <Link to="/login" className={['text text_type_main-small text_color_accent ml-2', styles.register_link].join(' ')}>Войти</Link>
            </div>
        </div>
    )
}

export default Register