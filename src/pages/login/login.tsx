import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './login.module.css'
import { useDispatch } from 'react-redux'
import { login } from '../../services/actions/actions'
import { TinputHandler } from '../../utils/types'

function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch();

    const onChangeEmail: TinputHandler = (evt) => {
        setEmail(evt.target.value);
    };
    const onChangePassword: TinputHandler = (evt) => {
        setPassword(evt.target.value);
    };

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <form className={['mt-20', styles.login].join(" ")} onSubmit={onSubmit}>
            <fieldset className={styles.login_form_container}>
                <h2 className={'text text_type_main-medium'}>Вход</h2>
                <EmailInput name='email' value={email} onChange={onChangeEmail} />
                <PasswordInput value={password} onChange={onChangePassword} />
                <Button htmlType="submit" type="primary" size="large">Войти</Button>
            </fieldset>
            <div className={['mt-20', styles.login_paragraph_container].join(" ")}>
                <p className={['text text_type_main-small text_color_inactive', styles.login_paragraph].join(' ')}>Вы - новый пользователь?</p>
                <Link to="/register" className={['text text_type_main-small text_color_accent ml-2', styles.login_link].join(' ')}>Зарегистрироваться</Link>
            </div>
            <div className={['mt-4', styles.login_paragraph_container].join(' ')}>
                <p className={['text text_type_main-small text_color_inactive', styles.login_paragraph].join(' ')}>Забыли пароль?</p>
                <Link to="/forgot-password" className={['text text_type_main-small text_color_accent ml-2', styles.login_link].join(' ')}>Восстановить пароль</Link>
            </div>
        </form>
    )
}

export default Login