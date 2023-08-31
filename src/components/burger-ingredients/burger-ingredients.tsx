import React, { useState, useRef } from 'react'
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientSection from './ingredient-section/indredient-section'

type TBurgerIngredientsProps = {
    title: string,
    className: string,
}

function BurgerIngredients(props: TBurgerIngredientsProps) {
    const { title, className } = props;
    const [current, setCurrent] = useState<string>('one');

    const containerRef = useRef<HTMLUListElement>(null);
    const bunRef = useRef<HTMLLIElement>(null);
    const sauceRef = useRef<HTMLLIElement>(null);
    const mainRef = useRef<HTMLLIElement>(null);

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
            if (section.element!.offsetTop - containerRef.current!.scrollTop < 40) {
                activeSectionId = section.id
            }
        }

        setCurrent(activeSectionId);
    };

    return (
        <li className={['mt-10', styles.burger_ingredients, className].join(" ")}>
            <h2 className='text text_type_main-large'>{title}</h2>
            <div className={["mt-5 mb-10", styles.tabs, className].join(" ")} >
                <Tab value="one" active={current === 'one'} onClick={setCurrent} >
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent} >
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent} >
                    Начинки
                </Tab>
            </div>
            <ul className={['custom-scroll', styles.ingredients_list].join(" ")} onScroll={handleScroll} ref={containerRef} >
                <IngredientSection ingredName='Булки' type='bun' customRef={bunRef} id='buns_section' />
                <IngredientSection ingredName='Соусы' type='sauce' customRef={sauceRef} id='sauces_section' />
                <IngredientSection ingredName='Начинки' type='main' customRef={mainRef} id='mains_section' />
            </ul>
        </li>
    )
}

export default BurgerIngredients