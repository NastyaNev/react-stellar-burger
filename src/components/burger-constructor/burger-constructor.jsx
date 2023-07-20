import React from 'react'
import styles from './burger-constructor.module.css'
import Middle from './middle/middle';
import Bun from './bun/bun';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDitails from '../modal/order-ditails/order-ditails';
import PropTypes from 'prop-types'
import { CHOOSE_MODAL, MODAL_OPEN } from '../../services/actions/modals';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswer } from '../../services/actions/constructor';

function BurgerConstructor(props) {
  const { className } = props;
  const dispatch = useDispatch();
  const mooved = useSelector((state) => state.constructorReducer.mooved);

  const ingredients = mooved.map((item) => item._id);

  const handleOpen = () => {
    dispatch(getAnswer(ingredients)).then(() => {
      dispatch({ type: MODAL_OPEN });
      dispatch({ type: CHOOSE_MODAL, typeModal: <OrderDitails /> });
    });
  };

  const totalPriceSelector = (state) => {
    const mooved = state.constructorReducer.mooved;
    const prices = mooved.map((item) => item.price);
    const bun = state.constructorReducer.bun;
    const bunPrice = bun ? bun.price * 2 : 0;

    return prices.reduce(function (previousValue, item) {
      return previousValue + item;
    }, 0) + bunPrice;
  };

  const totalPrice = useSelector(totalPriceSelector);

  return (
    <li className={['ml-10', styles.burger_constructor, className].join(" ")} >
      {/* <ul className={["ml-4 mt-25", styles.constructor_list].join(" ")} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}  >
        <Bun className='ml-8' type="bun" part="top" note="(верх)" />
        <Middle className='custom-scroll' />
        <Bun className='ml-8' type="bun" part="bottom" note="(низ)" />
      </ul> */}
      <Middle />
      <section className={["mt-10 mr-4", styles.sum_container].join(" ")}>
        <div className={['mr-10', styles.price_container].join(" ")}>
          <span className='mr-2 text text_type_digits-medium'>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={handleOpen} disabled={mooved.length === 0 ? true : false} >
          Оформить заказ
        </Button>
      </section>
    </li>
  )
}

BurgerConstructor.propTypes = {
  className: PropTypes.string
};

export default BurgerConstructor