import React, { useState, useEffect } from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { getArray } from '../../api/api'
import PropTypes from 'prop-types'

function Bun(props) {
    const { type, className, part, note, array } = props;
    const [ingArray, setIngArray] = useState([]);

    useEffect(() => {
        getArray()
            .then((res) => { setIngArray(res) })
            .catch(err => {
                console.log(err);
            })
    }, [])

    if (ingArray.length === 0) {
        return null
    }

    const found = ingArray.data.find(item => {
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
    type: PropTypes.string,
    className: PropTypes.string,
    part: PropTypes.string,
    note: PropTypes.string
};

export default Bun