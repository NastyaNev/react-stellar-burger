import React, { useState, useRef } from 'react'
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientSection from './ingredient-section/ingredient-section';
import PropTypes from 'prop-types'

function BurgerIngredients(props) {
    const { title, className } = props;
    const [current, setCurrent] = useState('one');

    const containerRef = useRef(null);
    const bunRef = useRef(null);
    const sauceRef = useRef(null);
    const mainRef = useRef(null);

    const handleScroll = () => {
        const sections = [
            {
                id: 'one',
                element: bunRef.current
            },
            {
                id: 'two',
                element: sauceRef.current
            },
            {
                id: 'three',
                element: mainRef.current
            }
        ]

        let activeSectionId = 'one';

        for (const section of sections) {
            if (section.element.offsetTop - containerRef.current.scrollTop < 40) {
                activeSectionId = section.id
            }
        }

        setCurrent(activeSectionId);
    };

    return (
        <li className={['mt-10', styles.burger_ingredients, className].join(" ")}>
            <h2 className='text text_type_main-large'>{title}</h2>
            <div className="mt-5 mb-10" style={{ display: 'flex' }} >
                <Tab value="one" active={current === 'one'} >
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} >
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} >
                    Начинки
                </Tab>
            </div>
            <ul className={['custom-scroll', styles.ingredients_list].join(" ")} onScroll={handleScroll} ref={containerRef} >
                <IngredientSection ingredName='Булки' type='bun' customRef={bunRef} />
                <IngredientSection ingredName='Соусы' type='sauce' customRef={sauceRef} />
                <IngredientSection ingredName='Начинки' type='main' data-section id="section3" customRef={mainRef} />
            </ul>
        </li>
    )
}

BurgerIngredients.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string
};

export default BurgerIngredients