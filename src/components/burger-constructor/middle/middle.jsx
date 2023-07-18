import React, { useState, useCallback } from 'react'
import styles from './middle.module.css'
import ItemContainer from './item-container/item-container'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { SET_COUNT } from '../../../store/actions/ingredients'
import { useDrop } from "react-dnd";
import { DELETE_CONST_ITEM, GET_MOOVED_ITEMS, GET_NEW_ID } from '../../../store/actions/constructor'

function Middle(props) {
    const { className } = props;
    const mooved = useSelector((state) => state.constructorReducer.mooved);
    const dispatch = useDispatch();
    const rand = Math.floor(Math.random() * 1000000);

    const [{isHover}, dropTarget] = useDrop({
        accept: 'items',
        drop(ingredient) {
            dispatch({ type: GET_MOOVED_ITEMS, ingredient: {...ingredient, id: ingredient._id + rand } });
            dispatch({ type: SET_COUNT, _id: ingredient._id });
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    });

    const borderColor = isHover ? styles.onHover : 'transparent';

    const [items, setItems] = useState(mooved)

    const moveListItem = useCallback(
        (dragIndex, hoverIndex) => {
            const dragItem = items[dragIndex]
            const hoverItem = items[hoverIndex]
            setItems(items => {
                const newListItems = [...items]
                newListItems[dragIndex] = hoverItem
                newListItems[hoverIndex] = dragItem
                return newListItems
            })
        },
        [items]
    )

    return (
        <div style={{borderColor}} ref={dropTarget}>
            <ul className={[styles.middle, className].join(" ")}  >
                {mooved.map((item, index) => (
                    <ItemContainer key={item.id} ingredient={item} index={index} moveListItem={moveListItem} icon={<DragIcon type="primary" />} />
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