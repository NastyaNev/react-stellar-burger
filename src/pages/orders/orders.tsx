import React from 'react'
import styles from './orders.module.css'
import Order from '../feed/order/order';


function FeedOrders() {
  return (
    <div className={['mt-10', styles.orders_container].join(" ")}>
      <ul className={['mt-5 custom-scroll', styles.orders_list].join(" ")} >
        <Order className={'mr-2'}></Order>
        <Order className={'mr-2'}></Order>
        <Order className={'mr-2'}></Order>
        <Order className={'mr-2'}></Order>
      </ul>
    </div>
  )
}

export default FeedOrders