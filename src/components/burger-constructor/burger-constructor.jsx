import React from 'react'
import styles from './burger-constructor.module.css'
import Middle from './middle/middle';
import Bun from './bun/bun';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDitails from '../modal/order-ditails/order-ditails';
import PropTypes from 'prop-types'
import { ingredientPropType } from '../../utils/prop-types';
import { store } from '../..';

function BurgerConstructor(props) {
  const { className } = props;

  const handleOpen = () => {
    store.dispatch({ type: 'MODAL_OPEN' });
    store.dispatch({ type: 'CHOOSE_MODAL', typeModal: <OrderDitails /> });
};

  return (
    <li className={['ml-10', styles.burger_constructor, className].join(" ")}>
      <ul className={["ml-4 mt-25", styles.constructor_list].join(" ")} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Bun className='ml-8' type="bun" part="top" note="(верх)" />
        <Middle className='custom-scroll' typeList={["main", "sauce"]} />
        <Bun className='ml-8' type="bun" part="bottom" note="(низ)" />
      </ul>
      <section className={["mt-10 mr-4", styles.sum_container].join(" ")}>
        <div className={['mr-10', styles.price_container].join(" ")}>
          <span className='mr-2 text text_type_digits-medium'>610</span>
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
  array: PropTypes.arrayOf(ingredientPropType),
  setIsModalOpen: PropTypes.func,
  className: PropTypes.string,
  setContentModal: PropTypes.func
};

export default BurgerConstructor