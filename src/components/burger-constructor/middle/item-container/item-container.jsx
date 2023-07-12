import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './item-container.module.css'

function ItemContainer(props) {
    const { constructorElement, icon } = props;

    return (
        <li className={['mr-1', styles.item_container].join(' ')}>
            {icon}
            <ConstructorElement
                text={constructorElement.name}
                price={constructorElement.price}
                thumbnail={constructorElement.image_mobile}
            />
        </li>
    )
}

export default ItemContainer