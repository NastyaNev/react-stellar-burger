import React from 'react'
import styles from './order.module.css'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { useAppSelector } from '../../../hooks';
import { totalPriceSelector } from '../../../services/selectors/total-price-selector';
import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation } from 'react-router-dom';

type TOrgerProps = {
    className: string,
}

function Order(props: TOrgerProps) {
    const { className } = props;
    const today = new Date();
    const location = useLocation();

    const totalPrice = useAppSelector(totalPriceSelector);

    const answer = useAppSelector((state) => state.order.answer);
    const mooved = useAppSelector(state => state.constructorBurger.mooved);
    const bun = useAppSelector(state => state.constructorBurger.bun);

    if (answer) {
        const burgerName = answer!.name;
        const orderNum = answer!.order!.number;
        const images = [bun!.image_mobile, ...mooved.map(i => i.image_mobile)];

        const visables = images.slice(0, 6);
        const invisables = images.slice(6);
        const numLeft = invisables.length;

        const styleSpan = () => {
            return images.length > 6 ? `mt-6 mr-6 ml-6 text text_type_main-small ${styles.order_image_span} ${styles.order_image_span_visible}` :
                `mt-6 mr-6 ml-6 text text_type_main-small ${styles.order_image_span}`
        }

        return (
            <li className={[styles.order, className].join(" ")}>
                <Link to={`/feed/${orderNum}`} className={styles.order_link} state={{ background: location }}>
                    <div className={['mt-6 mr-6 ml-6', styles.order_title_container].join(" ")}>
                        <p className={['text text_type_digits-default', styles.order_num].join(" ")}>#{orderNum}</p>
                        <FormattedDate className="text text_type_main-small text_color_inactive" date={new Date(
                            today.getFullYear(),
                            today.getMonth(),
                            today.getDate(),
                            today.getHours(),
                            today.getMinutes() - 1,
                            0,
                        )} />
                    </div>
                    <h4 className={['mt-6 mr-6 ml-6 text text_type_main-medium', styles.order_burger_name].join(" ")}>{burgerName}</h4>
                    <div className={['mt-6 mr-6 ml-6 mb-6', styles.order_bottom_container].join(" ")}>
                        <div className={styles.order_images_container}>
                            {visables.map((item) => (
                                <img className={styles.order_image} key={uuidv4()} src={item} />
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
        return (
            <li className={[styles.order].join(" ")}>
                <div className={['mt-6 mr-6 ml-6', styles.order_title_container].join(" ")}>
                    <p className={['text text_type_digits-default', styles.order_num].join(" ")}>#9809692</p>
                    <FormattedDate className="text text_type_main-small text_color_inactive" date={new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        today.getDate(),
                        today.getHours(),
                        today.getMinutes() - 1,
                        0,
                    )} />
                </div>
                <h4 className={'mt-6 mr-6 ml-6 text text_type_main-medium'}>Козюля сраный бургер</h4>
                <div className={['mt-6 mr-6 ml-6 mb-6', styles.order_bottom_container].join(" ")}>
                    <div>

                    </div>
                    <div className={'ml-6'}>
                        <span className='mr-2 text text_type_digits-medium'>{totalPrice}</span>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </li>
        )
    }
}

export default Order