import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { totalPriceSelector } from '../../../services/selectors/total-price-selector';
import styles from './feed-id.module.css'
import { useLocation, useParams } from 'react-router-dom';
import FeedIdIngredient from '../../feed-id-ingredient/feed-id-ingredient';
import { TIngredientConstructor } from '../../../utils/types';

function FeedId() {
  const today = new Date();
  const dispatch = useAppDispatch();
  const { state } = useLocation();

  const totalPrice = useAppSelector(totalPriceSelector);

  const answer = useAppSelector((state) => state.order.answer);
  const mooved = useAppSelector(state => state.constructorBurger.mooved);
  const bun = useAppSelector(state => state.constructorBurger.bun);
  let noRepeats: TIngredientConstructor[] = [];

  let ingredients = mooved.map((item) => item._id);
  if (bun) {
    ingredients = [bun._id, ...ingredients, bun._id]
  }

  mooved.forEach(item => {
    const existingItem = noRepeats.find(i => i._id === item._id);
    if (!existingItem) { noRepeats.push(item) };
  });

  const ingreds = [bun, ...noRepeats];

  if (answer == null) {
    return null
  };

  const burgerName = answer!.name;
  const orderNum = answer!.order!.number;

  const setClass = () => {
    return state === null ? `text text_type_digits-default mt-10 ${styles.new_feed_id_num}`
      : `text text_type_digits-default mt-10 ${styles.feed_id_num}`
  }

  return (
    <div className={[styles.feed_id, 'ml-10'].join(' ')}>
      <p className={setClass()}>#{orderNum}</p>
      <div className={[styles.feed_id_name_container, 'mt-5'].join(' ')}>
        <h4 className='text text_type_main-medium'>{burgerName}</h4>
        <span className={['mt-2 text text_type_main-small text_color_success', styles.feed_id_status].join(' ')}>Status</span>
      </div>
      <div className={['mt-15', styles.order_main_container].join(" ")}>
        <p className='text text_type_main-medium'>Состав:</p>
        <ul className={['mt-6 custom-scroll', styles.feed_id_images_container].join(' ')}>
          {ingreds.map((item) => (
            <FeedIdIngredient key={item!.id} item={item!} />
          ))}
        </ul>
      </div>
      <div className={['mt-10 mb-10', styles.feed_id_bottom_container].join(' ')}>
        <FormattedDate className="text text_type_main-small text_color_inactive" date={new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
          today.getHours(),
          today.getMinutes() - 1,
          0,
        )} />
        <div className={[styles.order_price_container].join(" ")}>
          <span className='mr-2 text text_type_digits-default'>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}

export default FeedId