import React from 'react'
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientSection from './ingredient-section/ingredient-section';

function BurgerIngredients(props) {
    const { title } = props;
    const [current, setCurrent] = React.useState('one');
    return (
        <li className={['mt-10 mb-5', styles.burger_ingredients].join(" ")}>
            <h2 className={['text text_type_main-large', styles.title].join(" ")}>{title}</h2>
            <div className="mt-5 mb-10" style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <ul className={['custom-scroll', styles.ingredients_list].join(" ")}>
                <IngredientSection ingredName='Булки' type='bun' />
                <IngredientSection ingredName='Соусы' type='sauce' />
                <IngredientSection ingredName='Начинки' type='main' />
            </ul>
        </li>
    )
}

export default BurgerIngredients