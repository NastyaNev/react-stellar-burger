import React from 'react'
import styles from './feed.module.css'
import FeedOrders from './feed-orders/feed-orders'
import FeedInfo from './feed-info/feed-info'

function Feed() {
    return (
        <ul className={styles.feed}>
            <FeedOrders className={styles.feed_column} title="Лента заказов" />
            <FeedInfo className={styles.feed_column} />
        </ul>
    )
}

export default Feed