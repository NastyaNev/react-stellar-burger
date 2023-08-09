import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './profile-edit.module.css'
import { useDispatch } from 'react-redux'
import { SET_USER } from '../../../services/actions/user'

function ProfileEdit() {
    const dispatch = useDispatch();

    const cancelEdit = () => {
        dispatch({ type: SET_USER });
    }

    return (
        <div className={['mt-6', styles.profile_edit].join(' ')}>
            <Link to="/profile" onClick={cancelEdit} className={['text text_type_main-small text_color_accent mr-5', styles.profile_edit_link].join(' ')}>Отмена</Link>
            <Button htmlType="submit" type="primary" size="large" >Сохранить</Button>
        </div>
    )
}

export default ProfileEdit