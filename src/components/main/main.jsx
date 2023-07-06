import React from 'react'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import styles from './main.module.css'
import OrderDitails from '../modal/order-ditails/order-ditails';

function Main(props) {
    const { setIsModalOpen } = props;

    return (
        <main>
            <ul className={styles.sections}>
                <BurgerIngredients className={styles.section} setIsModalOpen={setIsModalOpen} title="Соберите бургер" />
                <BurgerConstructor className={styles.section} setIsModalOpen={setIsModalOpen} />
            </ul>
        </main>
    )
}

export default Main