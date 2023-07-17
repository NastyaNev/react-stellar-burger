import React, { useState, useEffect } from 'react'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import styles from './dnd-container.module.css'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function DndContainer() {
    return (
        <DndProvider backend={HTML5Backend}>
            <ul className={styles.sections}>
                <BurgerIngredients className={styles.section} title="Соберите бургер" />
                <BurgerConstructor className={styles.section} />
            </ul>
        </DndProvider>
    )
}

export default DndContainer