import React, { useEffect } from 'react'
import styles from './middle.module.css'
import ItemContainer from './item-container/item-container'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../../store/actions/ingredients'

function Middle(props) {
    const { typeList, className } = props;
    const types = typeList;
    const dispatch = useDispatch();
    const { apiRequest, apiFailed, array } = useSelector((state) => state.arrayReducer);

    useEffect(() => {
        dispatch(getItems());
    }, [])

    const filtered = array.filter(item => {
        return types.includes(item.type);
    })

    return (
        <li>
            <ul className={[styles.middle, className].join(" ")}>
                {filtered.map(item => (
                    <ItemContainer key={item._id} constructorElement={item} icon={<DragIcon type="primary" />} />
                ))}
            </ul>
        </li>
    )

    if (apiFailed) {
        return <p>Произошла ошибка при получении данных</p>
    } else if (apiRequest) {
        return <p>Загрузка...</p>
    } else {
        return <>{array}</>;
    }
}

Middle.propTypes = {
    typeList: PropTypes.array,
    className: PropTypes.string
};


export default Middle