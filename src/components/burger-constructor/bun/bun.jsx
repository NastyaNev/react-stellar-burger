import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { data } from '../../../utils/data';

function Bun(props) {
    const { type, className, part } = props;
    const ingredients = data;
    const found = ingredients.find(item => {
        return item.type === type;
    })

    return (
        <li className={className}>
            {found && (
                <ConstructorElement
                    type={part}
                    isLocked={true}
                    text={found.name}
                    price={found.price}
                    thumbnail={found.image}
                />)
            }
        </li>
    )
}

export default Bun