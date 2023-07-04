import React from 'react'
import styles from './burger-constructor.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerConstructor(props) {
  const { img } = props;
  return (
    <li className={['ml-10', styles.burger_constructor].join(" ")}>
      <div className="ml-4 mt-25" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={img}
        />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail={img}
        />
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={img}
        />
      </div>
    </li>
  )
}

export default BurgerConstructor