import React, { useEffect } from 'react'
import styles from './my-orders.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { connect as connection, disconnect as disconnection } from '../../services/actions/actions-ws'
import MyOrder from './my-order/my-order';

export const getMyOrdersServerUrl = () => {
    const token = localStorage.getItem("accessToken");
    const accessToken = token?.split(" ").pop();
    return `wss://norma.nomoreparties.space/orders?token=${accessToken}`;
}

function MyOrders() {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(state => state.orders.table?.orders);


    useEffect(() => {
        dispatch(connection(getMyOrdersServerUrl()));
        return () => {
            dispatch(disconnection());
        };
    }, []);

    if (orders) {
        const newOrders = orders.concat().reverse();

        return (
            <div className={['mt-10', styles.my_orders_container].join(" ")}>
                <h2 className='text text_type_main-large'>Лента заказов</h2>
                <ul className={['mt-5 custom-scroll', styles.my_orders_list].join(" ")} >
                    {newOrders.map(i => (
                        <MyOrder className={'mr-2'} order={i} key={i._id} />
                    ))}
                </ul>
            </div>
        )
    } else { return null }
}

export default MyOrders