import React, { useState, useEffect } from 'react'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import styles from './dnd-container.module.css'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/actions/ingredients';

function DndContainer() {
    const array = useSelector((state) => state.arrayReducer.array);
    const [elements, setElements] = useState(array);
    const [draggedElements, setDraggedElements] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems());
    }, [])

    const handleDrop = (item) => {
        setElements(array.filter(element => element._id !== item._id));
        // array.filter(element => element._id !== item._id);

        setDraggedElements([
            ...draggedElements,
            item
        ]);

    };

    console.log('array', array)
    console.log('elements1', elements)
    console.log('draggedElements', draggedElements)

    return (
        <DndProvider backend={HTML5Backend}>
            <ul className={styles.sections}>
                <BurgerIngredients className={styles.section} elements={elements} title="Соберите бургер" />
                <BurgerConstructor className={styles.section} onDropHandler={handleDrop} draggedElements={draggedElements} />
            </ul>
        </DndProvider>
    )
}

export default DndContainer