import React from 'react'
import styles from './orders.module.css'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useNavigate } from 'react-router-dom'

function Orders() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  }

  return (
    <div className={styles.orders}>
      <p className='text text_type_main-medium mb-8'>Страница в разработке</p>
      <Button htmlType="button" type="primary" size="large" onClick={goBack}>На главную</Button>
    </div>
  )
}

export default Orders