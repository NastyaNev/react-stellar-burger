import React, { useState } from 'react'
import styles from './register.module.css'
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../components/api/api';
 
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onChangeName: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        setName(evt.target.value);
    };
    const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        setEmail(evt.target.value);
    };
    const onChangePassword: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        setPassword(evt.target.value);
    };

    const registerUser = (e: React.SyntheticEvent) => {
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