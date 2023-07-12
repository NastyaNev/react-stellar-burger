import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { ingredientPropType } from '../../../utils/prop-types';

function Bun(props) {
    const { type, className, part, note, array } = props;

    const found = array.find(item => {
        return item.type === type;
    })

    return (
        <li className={['mr-4', className].join(' ')}>
            {found && (
                <ConstructorElement
                    type={part}
                    isLocked={true}
                    text={[found.name, note].join(" ")}
                    price={found.price}
                    thumbnail={found.image_mobile}
                    key={found._id}
                />)
            }
        </li>
    )
}

Bun.propTypes = {
    array: PropTypes.arrayOf(ingredientPropType),
    type: PropTypes.string,
    className: PropTypes.string,
    part: PropTypes.string,
    note: PropTypes.string
};

export default Bun