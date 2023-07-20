import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styles from './bun.module.css'

function Bun(props) {
    const { type, className, part, note } = props;
    const dispatch = useDispatch();
    const { apiRequest, apiFailed, array } = useSelector((state) => state.ingredientsReducer);
    // const mooved = useSelector((state) => state.constructorReducer.mooved);

    // const [{ isHover }, dropTarget] = useDrop({
    //     accept: 'bun',
    //     drop(ingredient) {
    //         dispatch({ type: GET_MOOVED_ITEMS, ingredient: { ...ingredient, id: uuidv4() } });
    //         dispatch({ type: SET_COUNT, _id: ingredient._id });
    //     },
    //     collect: monitor => ({
    //         isHover: monitor.isOver(),
    //     })
    // });

    // const borderColor = isHover ? 'red' : 'transparent';

    

    const found = array.find(item => {
        return item.type === type;
    })

    return (
        <li className={['mr-4', className, styles.bun].join(' ')}
        // style={{ borderColor }} ref={dropTarget}
        >
            {found &&
                // {mooved.map((item, index) => (
                <ConstructorElement
                    type={part}
                    isLocked={true}
                    text={[found.name, note].join(" ")}
                    price={found.price}
                    thumbnail={found.image_mobile}
                    key={found.id}
                    id={found.id}
                    // index={index}
                />
                // ))}
            }
        </li>
    )

    // if (apiFailed) {
    //     return <p>Произошла ошибка при получении данных</p>
    // } else if (apiRequest) {
    //     return <p>Загрузка...</p>
    // } else {
    //     return <>{array}</>;
    // }

}

Bun.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    part: PropTypes.string,
    note: PropTypes.string
};

export default Bun