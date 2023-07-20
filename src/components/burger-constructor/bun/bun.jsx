import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './bun.module.css'

function Bun(props) {
    const { className, part, note, found } = props;

    return (
        <li className={['mr-4', className, styles.bun].join(' ')}        >
            {found &&
                <ConstructorElement
                    type={part}
                    isLocked={true}
                    text={[found.name, note].join(" ")}
                    price={found.price}
                    thumbnail={found.image_mobile}
                    key={found.id}
                    id={found.id}
                />
            }
        </li>
    )
}

Bun.propTypes = {
    className: PropTypes.string,
    part: PropTypes.string,
    note: PropTypes.string,
    found: PropTypes.any // TODO: change prop type
};

export default Bun