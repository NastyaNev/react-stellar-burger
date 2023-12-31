import React from 'react'
import styles from './order.module.css'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { useAppSelector } from '../../../hooks';
import { Link, useLocation } from 'react-router-dom';
import { TIngredient, TOrder } from '../../../utils/types/types';

type TOrgerProps = {
    className: string,
    order: TOrder
}

function Order(props: TOrgerProps) {
    const { className, order } = props;
    const location = useLocation();

    const array = useAppSelector(state => state.ingredients.array);

    if (order) {
        let ingreds: TIngredient[] = [];

        array.forEach(item => {
            if (order.ingredients.includes(item._id)) { ingreds.push(item) }
        });

        const images = ingreds.map(i => i.image_mobile);
        const bun = ingreds.find(i => i.type === "bun");
        const rest = ingreds.filter(i => i.type !== "bun");
        const bunPrice = bun ? bun.price * 2 : 0;
        const restPrices = rest.map(i => i.price);
        const totalPrice = restPrices.reduce(function (previousValue, item) {
            return previousValue + item;
        }, 0) + bunPrice;


        const visibles = images.slice(0, 6);
        const invisibles = images.slice(6);
        const numLeft = invisibles.length;
        const date = order.createdAt;

        const styleSpan = () => {
            return images.length > 6 ? `mt-6 mr-6 ml-6 text text_type_main-small ${styles.order_image_span} ${styles.order_image_span_visible}` :
                `mt-6 mr-6 ml-6 text text_type_main-small ${styles.order_image_span}`
        }

        return (
            <li className={[styles.order, className].join(" ")}>
                <Link to={`${order.number}`} className={styles.order_link} state={{ background: location }}>
                    <div className={['mt-6 mr-6 ml-6', styles.order_title_container].join(" ")}>
                        <p className={['text text_type_digits-default', styles.order_num].join(" ")}>#{order.number}</p>
                        <FormattedDate className="text text_type_main-small text_color_inactive" date={new Date(date)} />
                    </div>
                    <h4 className={['mt-6 mr-6 ml-6 text text_type_main-medium', styles.order_burger_name].join(" ")}>{order.name}</h4>
                    <div className={['mt-6 mr-6 ml-6 mb-6', styles.order_bottom_container].join(" ")}>
                        <div className={styles.order_images_container}>
                            {visibles.map((item) => (
                                <img className={styles.order_image} key={item} src={item} />
                            ))}
                            <span className={styleSpan()}>+{numLeft}</span>
                        </div>
                        <div className={['ml-6', styles.order_price_container].join(" ")}>
                            <span className='mr-2 text text_type_digits-medium'>{totalPrice}</span>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </Link>
            </li>
        )
    } else {
        return null
    }
}

export default Order