import React, { useState, useEffect, useRef } from 'react'
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientSection from './ingredient-section/ingredient-section';
import PropTypes from 'prop-types'
import { ingredientPropType } from '../../utils/prop-types';

function BurgerIngredients(props) {
    const { title, className, array } = props;
    const [current, setCurrent] = useState('one');
    
    return (
        <li className={['mt-10', styles.burger_ingredients, className].join(" ")}>
            <h2 className='text text_type_main-large'>{title}</h2>
            <div className="mt-5 mb-10" style={{ display: 'flex' }} >
                <Tab value="one" active={current === 'one'} onClick={setCurrent}  >
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <ul className={['custom-scroll', styles.ingredients_list].join(" ")} >
                <IngredientSection ingredName='Булки' type='bun' array={array} />
                <IngredientSection ingredName='Соусы' type='sauce' array={array} />
                <IngredientSection ingredName='Начинки' type='main' array={array} />
            </ul>
        </li>
    )
}

BurgerIngredients.propTypes = {
    array: PropTypes.arrayOf(ingredientPropType),
    title: PropTypes.string,
    className: PropTypes.string,
    setContentModal: PropTypes.func
};

export default BurgerIngredients