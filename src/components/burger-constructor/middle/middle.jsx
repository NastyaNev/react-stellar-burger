import React from 'react'
import styles from './middle.module.css'
import ItemContainer from './item-container/item-container'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_ITEM } from '../../../store/actions/ingredients'
import { useDrop } from "react-dnd";
import { GET_MOOVED_ITEMS } from '../../../store/actions/constructor'

function Middle(props) {
    const { className } = props;
    const mooved = useSelector((state) => state.constructorReducer.mooved);
    const dispatch = useDispatch();

    const [{isHover}, dropTarget] = useDrop({
        accept: ["main", "sauce"],
        drop(ingredient) {
            dispatch({ type: GET_MOOVED_ITEMS, ingredient });
            dispatch({ type: DELETE_ITEM, _id: ingredient._id });
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    });

    const borderColor = isHover ? styles.onHover : 'transparent';

    return (
        <div style={{borderColor}} ref={dropTarget}>
            <ul className={[styles.middle, className].join(" ")}  >
                {mooved.map(item => (
                    <ItemContainer key={item._id} ingredient={item} icon={<DragIcon type="primary" />} />
                ))}
            </ul>
        </div>
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