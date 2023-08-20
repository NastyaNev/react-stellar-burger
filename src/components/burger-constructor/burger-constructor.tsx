import React from 'react'
import styles from './burger-constructor.module.css'
import Middle from './middle/middle';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../modal/order-details/order-details';
import { useSelector } from 'react-redux';
import { totalPriceSelector } from '../../services/selectors/total-price-selector';
import { getAnswer } from '../../services/actions/actions'
import { TSetModalState } from '../../utils/types';
import { useAppDispatch, useAppSelector } from '../../hooks';

type TBurgerConstructorProps = {
  className: string,
  setModalState: TSetModalState,
}

function BurgerConstructor(props: TBurgerConstructorProps) {
  const { className, setModalState } = props;
  const dispatch = useAppDispatch();
  const mooved = useAppSelector((state) => state.constructorBurger.mooved);
  const bun = useAppSelector((state) => state.constructorBurger.bun);

  let ingredients = mooved.map((item) => item._id);
  if (bun) {
    ingredients = [bun._id, ...ingredients, bun._id]
  }

  const handleOpen = () => {
    dispatch(getAnswer(ingredients)).then(() => {
      setModalState({ isOpen: true, chooseModal: <OrderDetails />, onClose: null })
    })
      .catch((err: Error) => {
        console.log(err)
      });
  };

  const totalPrice = useAppSelector(totalPriceSelector);

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

export default BurgerConstructor