import React, { useEffect } from 'react'
import styles from './burger-constructor.module.css'
import Middle from './middle/middle';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../modal/order-details/order-details';
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { totalPriceSelector } from '../../services/selectors/total-price-selector';
import { getAnswer } from '../../services/actions/constructor';

function BurgerConstructor(props) {
  const { className, setModalState } = props;
  const dispatch = useDispatch();
  const mooved = useSelector((state) => state.constructorBurger.mooved);
  const bun = useSelector((state) => state.constructorBurger.bun);

  let ingredients = mooved.map((item) => item._id);
  if (bun) {
    ingredients = [bun._id, ...ingredients, bun._id]
  }

  const handleOpen = () => {
    dispatch(getAnswer(ingredients)).then(() => {
      setModalState({isOpen: true, chooseModal: <OrderDetails />, onClose: null})
    })
      .catch(err => {
        console.log(err)
      });
  };

  const totalPrice = useSelector(totalPriceSelector);

  return (
    <li className={['ml-10', styles.burger_constructor, className].join(" ")} >
      <Middle />
      <section className={["mt-10 mr-4", styles.sum_container].join(" ")}>
        <div className={['mr-10', styles.price_container].join(" ")}>
          <span className='mr-2 text text_type_digits-medium'>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={handleOpen} disabled={mooved.length === 0 && !bun ? true : false} >
          Оформить заказ
        </Button>
      </section>
    </li>
  )
}

BurgerConstructor.propTypes = {
  className: PropTypes.string,
  setModalState: PropTypes.func
};

export default BurgerConstructor