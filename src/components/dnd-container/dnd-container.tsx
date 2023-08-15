import React from 'react'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import styles from './dnd-container.module.css'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PropTypes from 'prop-types';
import { TSetModalState } from '../../types/types';

type TDndContainerProps = {
    setModalState: TSetModalState
}

function DndContainer(props: TDndContainerProps) {
    const { setModalState } = props;
    return (
        <DndProvider backend={HTML5Backend}>
            <ul className={styles.sections}>
                <BurgerIngredients className={styles.section} title="Соберите бургер" />
                <BurgerConstructor className={styles.section} setModalState={setModalState} />
            </ul>
        </DndProvider>
    )
}

DndContainer.propTypes = {
    setModalState: PropTypes.func
};

export default DndContainer