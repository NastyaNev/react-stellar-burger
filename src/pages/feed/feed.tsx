import React, { useEffect } from 'react'
import styles from './feed.module.css'
import FeedOrders from './feed-orders/feed-orders'
import FeedInfo from './feed-info/feed-info'
import { useAppDispatch } from '../../hooks';
import { connect as connection, disconnect as disconnection } from '../../services/actions/actions-ws'

export const ALL_ORDERS_SERVER_URL = 'wss://norma.nomoreparties.space/orders/all';

function Feed() {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(connection(ALL_ORDERS_SERVER_URL));
      return () => {
        dispatch(disconnection());
      };
    }, []);
    
    return (
        <ul className={styles.feed}>
            <FeedOrders className={styles.feed_column} title="Лента заказов" />
            <FeedInfo className={styles.feed_column} />
        </ul>
    )
}

export default Feed