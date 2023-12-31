import React from 'react'
import styles from "./feed-info.module.css"
import { useAppSelector } from '../../../hooks';

type TFeedInfo = {
    className: string,
}

function FeedInfo(props: TFeedInfo) {
    const { className } = props;
    const ordersInfo = useAppSelector((state) => state.orders.table);
    const orders = useAppSelector(state => {
        return state.orders.table?.orders
    });

    if (orders) {
        const total = ordersInfo!.total;
        const totalToday = ordersInfo!.totalToday;
        const size = 5;

        const filterByStatusDone = orders.filter(i => i.status === 'done');
        const filterByStatusInProcess = orders.filter(i => i.status === 'pending');

        return (
            <li className={['mt-10', className].join(" ")} >
                <ul className={styles.feed_info_container}>
                    <li>
                        <ul className={styles.feed_info_order_nums_container}>
                            <li>
                                <h4 className={['mb-6 text text_type_main-medium', styles.feed_info_nums_header].join(' ')}>Готовы:</h4>
                                <ul className={styles.feed_info_nums_done_container}>
                                    {filterByStatusDone.slice(0, size).map(i => (
                                        <li className='text text_type_digits-default text_color_success' key={i._id}>{i.number}</li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <h4 className={['mb-6 text text_type_main-medium', styles.feed_info_nums_header].join(' ')}>В работе:</h4>
                                <ul className={styles.feed_info_nums_isProcess_container}>
                                    {filterByStatusInProcess.slice(0, size).map(i => (
                                        <li className='text text_type_digits-default' key={i._id}>{i.number}</li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4 className={['text text_type_main-medium', styles.feed_info_executed_header].join(' ')}>Выполнено за всё время:</h4>
                        <p className={['text text_type_digits-large', styles.feed_info_executed_numbers].join(' ')}>{total}</p>
                    </li>
                    <li>
                        <h4 className={['text text_type_main-medium', styles.feed_info_executed_header].join(' ')}>Выполнено за сегодня:</h4>
                        <p className={['text text_type_digits-large', styles.feed_info_executed_numbers].join(' ')}>{totalToday}</p>
                    </li>
                </ul>
            </li>
        )
    } else {
        return null
    }
}

export default FeedInfo