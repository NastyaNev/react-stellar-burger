import React, { useState, useEffect } from 'react'
import styles from './middle.module.css'
import ItemContainer from './item-container/item-container'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { getArray } from '../../api/api'
import PropTypes from 'prop-types'

function Middle(props) {
    const { typeList, className } = props;
    const types = typeList;

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

    const filtered = ingArray.data.filter(item => {
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
    typeList: PropTypes.array,
    className: PropTypes.string
};


export default Middle