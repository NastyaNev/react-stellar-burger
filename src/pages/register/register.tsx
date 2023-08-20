import React, { useState } from 'react'
import styles from './register.module.css'
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../utils/api';
import { TformEvent, TinputEvent } from '../../utils/types';
 
function Register() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const onChangeName = (evt: TinputEvent) => {
        setName(evt.target.value);
    };
    const onChangeEmail = (evt: TinputEvent) => {
        setEmail(evt.target.value);
    };
    const onChangePassword = (evt: TinputEvent) => {
        setPassword(evt.target.value);
    };

    const registerUser = (e: TformEvent) => {
        e.preventDefault();
        return register(email, password, name).then(res => {
            if (res && res.success) {
                navigate(-1);
            } else {
                return Promise.reject("Ошибка данных с сервера");
            }
        })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form className={['mt-20', styles.register].join(" ")} onSubmit={registerUser}>
            <fieldset className={styles.register_form_container}>
                <h2 className={'text text_type_main-medium'}>Регистрация</h2>
                <Input placeholder={'Имя'} type='text' value={name} onChange={onChangeName} />
                <EmailInput name='email' value={email} onChange={onChangeEmail} />
                <PasswordInput placeholder={'Пароль'} value={password} onChange={onChangePassword} />
                <Button htmlType="submit" >Зарегистрироваться</Button>
            </fieldset>
            <div className={['mt-20', styles.register_paragraph_container].join(" ")}>
                <p className={['text text_type_main-small text_color_inactive', styles.register_paragraph].join(' ')}>Уже зарегистрированы?</p>
                <Link to='/login' className={['text text_type_main-small text_color_accent ml-2', styles.register_link].join(' ')}>Войти</Link>
            </div>
        </form>
    )
}

export default Register