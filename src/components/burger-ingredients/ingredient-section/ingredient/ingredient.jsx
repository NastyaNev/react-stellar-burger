import React, { useEffect, useRef, useState } from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient.module.css'
import IngredientDitails from '../../../modal/ingredient-dilails/ingredient-dilails'
import { ingredientPropType } from '../../../../utils/prop-types'
import PropTypes from 'prop-types'
import { CHOOSE_MODAL, MODAL_OPEN } from '../../../../store/actions/modals'
import { useDispatch } from 'react-redux'
import { useDrag } from "react-dnd";

function Ingredient({ ingredient }) {
    const dispatch = useDispatch();
    const {_id, name, price, image_mobile } = ingredient;
    const [{isDrag}, dragRef] = useDrag({
        type: ingredient.type,
        item: {_id, name, price, image_mobile},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    const handleOpen = () => {
        dispatch({ type: MODAL_OPEN });
        dispatch({ type: CHOOSE_MODAL, typeModal: <IngredientDitails ingredient={ingredient} /> });
    };

    return (
        !isDrag && 
        <li className={styles.card} onClick={handleOpen} ref={dragRef} >
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

Ingredient.propTypes = {
    ingredient: ingredientPropType,
    setContentModal: PropTypes.func
};

export default Ingredient