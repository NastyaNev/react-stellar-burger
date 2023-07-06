import React from 'react'
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientSection from './ingredient-section/ingredient-section';

function BurgerIngredients(props) {
    const { title, className, setIsModalOpen } = props;
    const [current, setCurrent] = React.useState('one');
    
    return (
        <li className={['mt-10', styles.burger_ingredients, className].join(" ")} >
            <h2 className='text text_type_main-large'>{title}</h2>
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
            <ul className={['custom-scroll', styles.ingredients_list].join(" ")} > 
                <IngredientSection ingredName='Булки' type='bun' setIsModalOpen={setIsModalOpen}/>
                <IngredientSection ingredName='Соусы' type='sauce' setIsModalOpen={setIsModalOpen}/>
                <IngredientSection ingredName='Начинки' type='main' setIsModalOpen={setIsModalOpen}/>
            </ul>
        </li>
    )
}

export default BurgerIngredients