import React from 'react'
import styles from './middle.module.css'
import ItemContainer from './item-container/item-container'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { ingredientPropType } from '../../../utils/prop-types'
import { store } from '../../..'

function Middle(props) {
    const { typeList, className, array } = props;
    const types = typeList;

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
}

Middle.propTypes = {
    array: PropTypes.arrayOf(ingredientPropType),
    typeList: PropTypes.array,
    className: PropTypes.string
};


export default Middle