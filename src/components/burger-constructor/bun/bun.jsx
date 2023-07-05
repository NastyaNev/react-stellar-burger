import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { data } from '../../../utils/data';

function Bun(props) {
    const { type, className, part, note } = props;
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
                    text={[found.name, note].join(" ")}
                    price={found.price}
                    thumbnail={found.image}
                    key={found._id}
                />)
            }
        </li>
    )
}

export default Bun