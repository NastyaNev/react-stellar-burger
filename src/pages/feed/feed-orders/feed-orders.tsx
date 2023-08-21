import React from 'react'
import styles from "./feed-orders.module.css"
import Order from '../order/order';

type TFeedOrders = {
    title: string,
    className: string,
}

function FeedOrders(props: TFeedOrders) {
    const { title, className } = props;
  return (
    <li className={['mt-10', styles.orders_container, className].join(" ")}>
            <h2 className='text text_type_main-large'>{title}</h2>
            <ul className={['mt-5', 'custom-scroll', styles.orders_list].join(" ")} >
                <Order ></Order>
                <Order ></Order>
                <Order ></Order>
            </ul>
        </li>
  )
}

export default FeedOrders