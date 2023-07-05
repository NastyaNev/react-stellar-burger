import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient.module.css'

function Ingredient({ ingredient }) {

    return (
        <li className={styles.card}>
            <img src={ingredient.image} />
            <div className={["mt-2", styles.span_container].join(" ")}>
                <span className="text text_type_digits-default mr-2">{ingredient.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <p className={['text text_type_main-small mt-2', styles.ingredient_name].join(" ")}>{ingredient.name}</p>
        </li>
    )
}

export default Ingredient