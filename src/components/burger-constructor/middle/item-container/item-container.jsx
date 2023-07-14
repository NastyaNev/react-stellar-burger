import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './item-container.module.css'

function ItemContainer(props) {
    const { ingredient, icon } = props;

    return (
        <li className={['mr-1', styles.item_container].join(' ')}>
            {icon}
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image_mobile}
            />
        </li>
    )
}

export default ItemContainer