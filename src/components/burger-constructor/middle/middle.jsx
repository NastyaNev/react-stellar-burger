import React, { useEffect } from 'react'
import styles from './middle.module.css'
import ItemContainer from './item-container/item-container'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../../store/actions/ingredients'
import { useDrop } from "react-dnd";

function Middle(props) {
    const { className, draggedElements, onDropHandler } = props;
    // const types = typeList;
    // const dispatch = useDispatch();
    // const { apiRequest, apiFailed, array } = useSelector((state) => state.arrayReducer);

    // useEffect(() => {
    //     dispatch(getItems());
    // }, [])

    // const filtered = array.filter(item => {
    //     return types.includes(item.type);
    // })
    

    const [{isHover}, dropTarget] = useDrop({
        accept: "sauce",
        drop(ingredient) {
            onDropHandler(ingredient);
            console.log("ingredient", ingredient);
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    });
    
    const borderColor = isHover ? 'lightgreen' : 'transparent';

    return (
        <li style={{borderColor}} ref={dropTarget}>
            <ul className={[styles.middle, className].join(" ")}  >
                {/* {filtered.map(item => (
                    <ItemContainer key={item._id} constructorElement={item} icon={<DragIcon type="primary" />} />
                ))} */}
                {draggedElements.map(item => (
                    <ItemContainer key={item._id} ingredient={item} icon={<DragIcon type="primary" />} />
                ))}
            </ul>
        </li>
    )

    // if (apiFailed) {
    //     return <p>Произошла ошибка при получении данных</p>
    // } else if (apiRequest) {
    //     return <p>Загрузка...</p>
    // } else {
    //     return <>{array}</>;
    // }
}

Middle.propTypes = {
    typeList: PropTypes.array,
    className: PropTypes.string
};


export default Middle