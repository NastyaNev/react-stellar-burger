import React, { useEffect } from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../../store/actions/ingredients'

function Bun(props) {
    const { type, className, part, note } = props;
    const dispatch = useDispatch();
    const { apiRequest, apiFailed, array } = useSelector((state) => state.arrayReducer);

    useEffect(() => {
        dispatch(getItems());
    }, [])

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

    if (apiFailed) {
        return <p>Произошла ошибка при получении данных</p>
    } else if (apiRequest) {
        return <p>Загрузка...</p>
    } else {
        return <>{array}</>;
    }

}

Bun.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    part: PropTypes.string,
    note: PropTypes.string
};

export default Bun