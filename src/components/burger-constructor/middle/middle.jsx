import React, { useState, useCallback, useEffect } from 'react'
import styles from './middle.module.css'
import ItemContainer from './item-container/item-container'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { SET_COUNT } from '../../../store/actions/ingredients'
import { useDrop } from "react-dnd";
import { DELETE_CONST_ITEM, GET_MOOVED_ITEMS, GET_NEW_ID } from '../../../store/actions/constructor'
import { v4 as uuidv4 } from 'uuid';
import { setOrder } from '../../api/api'

function Middle(props) {
    const { className } = props;
    const mooved = useSelector((state) => state.constructorReducer.mooved);
    const dispatch = useDispatch();

    const [{ isHover }, dropTarget] = useDrop({
        accept: ['sauce', 'main', 'bun'],
        drop(ingredient) {
            dispatch({ type: GET_MOOVED_ITEMS, ingredient: { ...ingredient, id: uuidv4() } });
            dispatch({ type: SET_COUNT, _id: ingredient._id });
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

            // const newItems = [];

            // for (let prevItem of prevItems) {
            //     if(moovedIds.includes(prevItem.id)){
            //         newItems.push(prevItem)
            //     }
            // }

            // for(let moovedItem of mooved) {
            //     if(!itemIdList.includes(moovedItem.id)) {
            //         newItems.push(moovedItem)
            //     }
            // }

            // return newItems

            return [...prevItems.filter((item) => moovedIds.includes(item.id)), ...mooved.filter((item) => !itemIdList.includes(item.id))];
        })
    }, [mooved]);

    console.log('mooved', mooved);
    console.log('items', items);

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