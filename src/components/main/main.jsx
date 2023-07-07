import React from 'react'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import styles from './main.module.css'

function Main(props) {
    const { setIsModalOpen, setContentModal } = props;

    return (
        <main>
            <ul className={styles.sections}>
                <BurgerIngredients className={styles.section} setIsModalOpen={setIsModalOpen} setContentModal={setContentModal} title="Соберите бургер" />
                <BurgerConstructor className={styles.section} setIsModalOpen={setIsModalOpen} setContentModal={setContentModal} />
            </ul>
        </main>
    )
}

export default Main