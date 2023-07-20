import React, { useState, useCallback, useEffect } from 'react'
import styles from './middle.module.css'
import ItemContainer from './item-container/item-container'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { SET_COUNT } from '../../../services/actions/ingredients'
import { useDrop } from "react-dnd";
import { GET_MOOVED_ITEMS } from '../../../services/actions/constructor'
import { v4 as uuidv4 } from 'uuid';

function Middle(props) {
    const { className } = props;
    const mooved = useSelector((state) => state.constructorReducer.mooved);
    const dispatch = useDispatch();

    const [{ isHover }, dropTarget] = useDrop({
        accept: ['sauce', 'main', 'bun'],
        drop(ingredient) {
            dispatch({ type: GET_MOOVED_ITEMS, ingredient: { ...ingredient, id: uuidv4() } });
            dispatch({ type: SET_COUNT });
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    });

    const borderColor = isHover ? styles.onHover : 'transparent';

    const [items, setItems] = useState(mooved);

    useEffect(() => {
        setItems((prevItems) => {
            const itemIdList = prevItems.map((item) => item.id);
            const moovedIds = mooved.map((item) => item.id);

            return [...prevItems.filter((item) => moovedIds.includes(item.id)), ...mooved.filter((item) => !itemIdList.includes(item.id))];
        })
    }, [mooved]);

    const moveItems = useCallback((dragIndex, hoverIndex) => {
        setItems((prevItems) => {
            const clonedItems = [...prevItems];
            const removedItem = clonedItems.splice(dragIndex, 1)[0];
            clonedItems.splice(hoverIndex, 0, removedItem);
            return clonedItems;
        });
    }, []);

    return (
        <div style={{ borderColor }} ref={dropTarget}>
            <ul className={[styles.middle, className].join(" ")}  >
                {items.map((item, index) => (
                    <ItemContainer key={item.id} id={item.id} ingredient={item} index={index} moveItems={moveItems} />
                ))}
            </ul>
        </div>
    )
}

Middle.propTypes = {
    typeList: PropTypes.array,
    className: PropTypes.string
};


export default Middle