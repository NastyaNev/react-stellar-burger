import React from 'react'
import styles from "./feed-info.module.css"
import { useAppSelector } from '../../../hooks';

type TFeedInfo = {
    className: string,
}

function FeedInfo(props: TFeedInfo) {
    const { className } = props;
    const answer = useAppSelector((state) => state.order.answer);

    if (answer) {
        const orderNum = answer!.order!.number;

        return (
            <li className={['mt-10', className].join(" ")} >
                <ul className={styles.feed_info_container}>
                    <li>
                        <ul className={styles.feed_info_order_nums_container}>
                            <li>
                                <h4 className={['mb-6 text text_type_main-medium', styles.feed_info_nums_header].join(' ')}>Готовы:</h4>
                                <ul className={styles.feed_info_nums_done_container}>
                                    <li className='text text_type_digits-default text_color_success'>{orderNum}</li>
                                    <li className='text text_type_digits-default text_color_success'>{orderNum}</li>
                                    <li className='text text_type_digits-default text_color_success'>{orderNum}</li>
                                    <li className='text text_type_digits-default text_color_success'>{orderNum}</li>
                                    <li className='text text_type_digits-default text_color_success'>{orderNum}</li>
                                </ul>
                            </li>
                            <li>
                                <h4 className={['mb-6 text text_type_main-medium', styles.feed_info_nums_header].join(' ')}>В работе:</h4>
                                <ul className={styles.feed_info_nums_isProcess_container}>
                                    <li className='text text_type_digits-default'>7777777</li>
                                    <li className='text text_type_digits-default'>7777777</li>
                                    <li className='text text_type_digits-default'>7777777</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4 className={['text text_type_main-medium', styles.feed_info_executed_header].join(' ')}>Выполнено за всё время:</h4>
                        <p className={['text text_type_digits-large', styles.feed_info_executed_numbers].join(' ')}>28 757</p>
                    </li>
                    <li>
                        <h4 className={['text text_type_main-medium', styles.feed_info_executed_header].join(' ')}>Выполнено за сегодня:</h4>
                        <p className={['text text_type_digits-large', styles.feed_info_executed_numbers].join(' ')}>138</p>
                    </li>
                </ul>
            </li>
        )
    } else {
        return (
            <li className={['mt-10', className].join(" ")} >
                <ul className={styles.feed_info_container}>
                    <li>
                        <ul className={styles.feed_info_order_nums_container}>
                            <li>
                                <h4 className={['mb-6 text text_type_main-medium', styles.feed_info_nums_header].join(' ')}>Готовы:</h4>
                                <ul className={styles.feed_info_nums_done_container}>
                                    <li className='text text_type_digits-default text_color_success'>7777777</li>
                                    <li className='text text_type_digits-default text_color_success'>7777777</li>
                                    <li className='text text_type_digits-default text_color_success'>7777777</li>
                                    <li className='text text_type_digits-default text_color_success'>7777777</li>
                                    <li className='text text_type_digits-default text_color_success'>7777777</li>
                                </ul>
                            </li>
                            <li>
                                <h4 className={['mb-6 text text_type_main-medium', styles.feed_info_num_header].join(' ')}>В работе:</h4>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4 className={['text text_type_main-medium', styles.feed_info_executed_header].join(' ')}>Выполнено за всё время:</h4>
                    </li>
                    <li>
                        <h4 className={['text text_type_main-medium', styles.feed_info_executed_header].join(' ')}>Выполнено за сегодня:</h4>
                    </li>
                </ul>
            </li>
        )
    }
}

export default FeedInfo