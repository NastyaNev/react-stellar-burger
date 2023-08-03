import React from 'react'
import styles from './order.module.css'
import underConst from '../../images/UnderConst.svg'

function Orders() {
  return (
    <div className={styles.orders}>
      <p className='text text_type_main-medium'>Страница в разработке</p>
      <img className={['mt-15', styles.orders_image].join(" ")} src={underConst} alt='Страница в разработке' />
    </div>
  )
}

export default Orders