import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './profile-edit.module.css'
import { setVisitor } from '../../../services/reducers/userSlice'
import { Tuser } from '../../../utils/types'
import { useAppDispatch } from '../../../hooks'

function ProfileEdit() {
    const dispatch = useAppDispatch();

    const cancelEdit = (user: Tuser) => {
        dispatch(setVisitor(user = null));
    }

    return (
        <div className={['mt-6', styles.profile_edit].join(' ')}>
            <Link to="/profile" onClick={() => cancelEdit(null)} className={['text text_type_main-small text_color_accent mr-5', styles.profile_edit_link].join(' ')}>Отмена</Link>
            <Button htmlType="submit" type="primary" size="large" >Сохранить</Button>
        </div>
    )
}

export default ProfileEdit