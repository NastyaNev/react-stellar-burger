import React from 'react'
import styles from './burger-constructor.module.css'
import Middle from './middle/middle';
import Bun from './bun/bun';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor(props) {
  const { className } = props;
  return (
    <li className={['ml-10', styles.burger_constructor, className].join(" ")}>
      <ul className={["ml-4 mt-25", styles.constructor_list].join(" ")} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Bun className='ml-8' type="bun" part="top" />
        <Middle className='custom-scroll' type='main' />
        <Bun className='ml-8' type="bun" part="bottom" />
      </ul>
      <section className={["mt-10 mr-4", styles.sum_container].join(" ")}>
        <div className={['mr-10', styles.price_container].join(" ")}>
          <span className='mr-4 text text_type_digits-medium'>610</span>
          <div className={styles.icon_container}>
            <CurrencyIcon className={styles.icon} type="primary" />
          </div>
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </section>
    </li>
  )
}

export default BurgerConstructor