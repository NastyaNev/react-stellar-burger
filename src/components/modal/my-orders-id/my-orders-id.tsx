import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks';
import styles from './my-order-id.module.css'
import { useLocation, useParams } from 'react-router-dom';
import FeedIdIngredient from '../../feed-id-ingredient/feed-id-ingredient';
import { TIngredient } from '../../../utils/types/types';
import { delFeedOrder, getFeedOrder } from '../../../services/reducers/feedIdSlice';
import { connect as connection, disconnect as disconnection } from '../../../services/actions/actions-ws';

export const ALL_ORDERS_SERVER_URL = 'wss://norma.nomoreparties.space/orders/all';

function MyOrdersId() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { state } = useLocation();

  const allOrders = useAppSelector((state) => state.orders.table?.orders);
  const feedOrder = useAppSelector((state) => state.feedOrder.feedOrder);
  const array = useAppSelector(state => state.ingredients.array);

  useEffect(() => {
    dispatch(connection(ALL_ORDERS_SERVER_URL));
    return () => {
      dispatch(disconnection());
    };
  }, []);

  useEffect(() => {
    if (allOrders) {
      const order = allOrders.find((item) => {
        return item.number == id
      });
      if (order) {
        dispatch(getFeedOrder(order));
      }
    }
  }, [allOrders])

  useEffect(() => {
    return () => {
      dispatch(delFeedOrder());
    }
  }, []);

  if (feedOrder == null) {
    return null
  };

  let orderItems: TIngredient[] = []
  feedOrder.ingredients.forEach(ingredientId => {
    const item = array.find(i => i._id == ingredientId)
    if (item) { orderItems.push(item) }
  });

  const bun = orderItems.find(i => i.type === "bun");
  const rest = orderItems.filter(i => i.type !== "bun");
  const bunPrice = bun ? bun.price * 2 : 0;
  const restPrices = rest.map(i => i.price);
  const totalPrice = restPrices.reduce(function (previousValue, item) {
    return previousValue + item;
  }, 0) + bunPrice;

  let noRepeats: TIngredient[] = [];
  orderItems.forEach(item => {
    const existingItem = noRepeats.find(i => i._id === item._id);
    if (!existingItem) { noRepeats.push(item) };
  });

  const date = feedOrder!.createdAt;

  const setClass = () => {
    return state === null ? `text text_type_digits-default mt-10 ${styles.new_feed_id_num}`
      : `text text_type_digits-default mt-10 ${styles.feed_id_num}`
  }

  const status = () => {
    if (feedOrder.status === "done") { return 'Выполнен' }
    else if (feedOrder.status === 'pending') { return 'Готовится' }
  };

  const setClassStatus = () => {
    if (feedOrder.status === "done") { return `mt-2 text text_type_main-small text_color_success ${styles.feed_id_status}` }
    else if (feedOrder.status === 'pending') { return `mt-2 text text_type_main-small ${styles.feed_id_status}` }
  };

  return (
    <div className={styles.feed_id}>
      <p className={setClass()}>#{feedOrder.number}</p>
      <div className={[styles.feed_id_name_container, 'mt-5'].join(' ')}>
        <h4 className='text text_type_main-medium'>{feedOrder.name}</h4>
        <span className={setClassStatus()}>{status()}</span>
      </div>
      <div className={['mt-15', styles.order_main_container].join(" ")}>
        <p className='text text_type_main-medium'>Состав:</p>
        <ul className={['mt-6 custom-scroll', styles.feed_id_images_container].join(' ')}>
          {noRepeats.map((item) => (
            <FeedIdIngredient key={item._id} item={item} rest={rest} />
          ))}
        </ul>
      </div>
      <div className={['mt-10 mb-10', styles.feed_id_bottom_container].join(' ')}>
        <FormattedDate className="text text_type_main-small text_color_inactive" date={new Date(date)} />
        <div className={[styles.order_price_container].join(" ")}>
          <span className='mr-2 text text_type_digits-default'>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}

export default MyOrdersId