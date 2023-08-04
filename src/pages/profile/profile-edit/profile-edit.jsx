import React from 'react'
import ProfileInfo from '../../profile-info/profile-info'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './profile-edit.module.css'

function ProfileEdit() {
    return (
        <div className={['mt-6', styles.profile_edit].join(' ')}>
            <Link to='/profile' className={['text text_type_main-small text_color_accent mr-5', styles.profile_edit_link].join(' ')}>Отмена</Link>
            <Button htmlType="button" type="primary" size="large">Сохранить</Button>
        </div>
    )
}

export default ProfileEdit