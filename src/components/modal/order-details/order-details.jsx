import React from 'react'
import styles from './order-details.module.css'
import done from '../../../images/graphics.svg'
import { useSelector } from 'react-redux';

function OrderDetails() {
    const answer = useSelector((state) => state.orderReducer.answer);

    const orderNum = answer.order.number;

    return (
        <div className={styles.order_ditails}>
            <p className={['text text_type_digits-large mt-30', styles.order_number].join(' ')}>{orderNum}</p>
            <p className='text text_type_main-medium  mt-8'>идентификатор заказа</p>
            <img className='mt-15' src={done} alt='галочка' />
            <p className='mt-15 text text_type_main-small'>Ваш заказ начали готовить</p>
            <p className='mt-2 mb-30 text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails