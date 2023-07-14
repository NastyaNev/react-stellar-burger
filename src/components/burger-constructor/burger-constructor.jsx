import React, { useRef } from 'react'
import styles from './burger-constructor.module.css'
import Middle from './middle/middle';
import Bun from './bun/bun';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDitails from '../modal/order-ditails/order-ditails';
import PropTypes from 'prop-types'
import { CHOOSE_MODAL, MODAL_OPEN } from '../../store/actions/modals';
import { useDispatch } from 'react-redux';

function BurgerConstructor(props) {
  const { className, onDropHandler, draggedElements } = props;
  const dispatch = useDispatch();
  
  const handleOpen = () => {
    dispatch({ type: MODAL_OPEN });
    dispatch({ type: CHOOSE_MODAL, typeModal: <OrderDitails /> });
  };

  return (
    <li className={['ml-10', styles.burger_constructor, className].join(" ")} >
      <ul className={["ml-4 mt-25", styles.constructor_list].join(" ")} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}  >
        <Bun className='ml-8' type="bun" part="top" note="(верх)"  />
        <Middle className='custom-scroll'
        // typeList={["main", "sauce"]}
        onDropHandler={onDropHandler}  draggedElements={draggedElements} />
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
  setIsModalOpen: PropTypes.func,
  className: PropTypes.string
};

export default BurgerConstructor