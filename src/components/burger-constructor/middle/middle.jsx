import React from 'react'
import styles from './middle.module.css'
import ItemContainer from './item-container/item-container'
import { data } from '../../../utils/data';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Middle(props) {
    const { type, className } = props;
    const ingredients = data;
    const filtered = ingredients.filter(item => {
        return item.type === type;
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

export default Middle