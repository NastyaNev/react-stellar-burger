import React from 'react'
import styles from "./feed-orders.module.css"
import Order from '../order/order';
import { useAppSelector } from '../../../hooks';

type TFeedOrders = {
  title: string,
  className: string,
}

function FeedOrders(props: TFeedOrders) {
  const { title, className } = props;
  const orders = useAppSelector(state => state.orders.table?.orders);

if (orders) {
  return (
    <li className={['mt-10', styles.orders_container, className].join(" ")}>
      <h2 className='text text_type_main-large'>{title}</h2>
      <ul className={['mt-5 custom-scroll', styles.orders_list].join(" ")} >
        {orders.map(i => (
          <Order className={'mr-2'} order={i} key={i._id}/>
        ))}
      </ul>
    </li>
  )
} else {return null}
}

export default FeedOrders