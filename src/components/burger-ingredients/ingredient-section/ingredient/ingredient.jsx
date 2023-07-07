import React, { useState } from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient.module.css'
import IngredientDitails from '../../../modal/ingredient-dilails/ingredient-dilails'

function Ingredient({ ingredient, setIsModalOpen, setContentModal }) {
    const onClickIngredient = () => {
        setIsModalOpen(true);
        setContentModal(<IngredientDitails />);
      }

    return (
        <li className={styles.card} onClick={onClickIngredient}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img src={ingredient.image} alt={ingredient.name} />
            <div className={["mt-2", styles.span_container].join(" ")}>
                <span className="text text_type_digits-default mr-2">{ingredient.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <p className={['text text_type_main-small mt-2', styles.ingredient_name].join(" ")}>{ingredient.name}</p>
        </li>
    )
}

export default Ingredient