import React, { useRef } from 'react'
import styles from './burger-constructor.module.css'
import Middle from './middle/middle';
import Bun from './bun/bun';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDitails from '../modal/order-ditails/order-ditails';
import PropTypes from 'prop-types'
import { CHOOSE_MODAL, MODAL_OPEN } from '../../store/actions/modals';
import { useDispatch, useSelector } from 'react-redux';

function BurgerConstructor(props) {
  const { className } = props;
  const dispatch = useDispatch();
  
  
  const handleOpen = () => {
    dispatch({ type: MODAL_OPEN });
    dispatch({ type: CHOOSE_MODAL, typeModal: <OrderDitails /> });
  };

  // const totalPrice = price => {
  //   const formatedPrice = new Intl.NumberFormat('ru-RU', {
  //     // style: 'currency',
  //     // currency: 'RUB'
  //   }).format(price);
  //   return formatedPrice;
  // };
  
  // const totalPriceSelector = state => {
  //   const { mooved: { items } } = state;
  //   return items.reduce((item) => item.price * item.qty, 0);
  // };

  // const price = useSelector(totalPriceSelector);

  return (
    <li className={['ml-10', styles.burger_constructor, className].join(" ")} >
      <ul className={["ml-4 mt-25", styles.constructor_list].join(" ")} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}  >
        <Bun className='ml-8' type="bun" part="top" note="(верх)"  />
        <Middle className='custom-scroll' />
        <Bun className='ml-8' type="bun" part="bottom" note="(низ)" />
      </ul>
      <section className={["mt-10 mr-4", styles.sum_container].join(" ")}>
        <div className={['mr-10', styles.price_container].join(" ")}>
          <span className='mr-2 text text_type_digits-medium'>666</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={handleOpen} >
          Оформить заказ
        </Button>
      </section>
    </li>
  )
}

BurgerConstructor.propTypes = {
  setIsModalOpen: PropTypes.func,
  className: PropTypes.string
};

export default BurgerConstructor