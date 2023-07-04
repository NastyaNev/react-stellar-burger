import React from 'react'
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Ingredient from './ingredient/ingredient';

function BurgerIngredients(props) {
    const { title } = props;
    const [current, setCurrent] = React.useState('one');
    return (
        <div className={['mt-10 mb-5', styles.burger_ingredients].join(" ")}>
            <h2 className={['text text_type_main-large', styles.title].join(" ")}>{title}</h2>
            <div className="mb -10" style={{ display: 'flex' }}>
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
                <li><Ingredient ingredName='Булки'/></li>
                <li><Ingredient ingredName='Соусы'/></li>
                <li><Ingredient ingredName='Начинки'/></li>

                <li><Ingredient ingredName='Булки'/></li>
                <li><Ingredient ingredName='Соусы'/></li>
                <li><Ingredient ingredName='Начинки'/></li>

                <li><Ingredient ingredName='Булки'/></li>
                <li><Ingredient ingredName='Соусы'/></li>
                <li><Ingredient ingredName='Начинки'/></li>

                <li><Ingredient ingredName='Булки'/></li>
                <li><Ingredient ingredName='Соусы'/></li>
                <li><Ingredient ingredName='Начинки'/></li>

                <li><Ingredient ingredName='Булки'/></li>
                <li><Ingredient ingredName='Соусы'/></li>
                <li><Ingredient ingredName='чинки'/></li>
            </ul>
        </div>
    )
}

export default BurgerIngredients