import React from 'react'
import { ConstructorElement, DeleteIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './item-container.module.css'
import { useDispatch } from 'react-redux';
import { DELETE_CONST_ITEM } from '../../../../store/actions/constructor';
import { DOWN_COUNT } from '../../../../store/actions/ingredients';

function ItemContainer(props) {
    const { ingredient, icon } = props;
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({ type: DELETE_CONST_ITEM, _id: ingredient._id });
        dispatch({ type: DOWN_COUNT, _id: ingredient._id });
    }

    return (
        <li className={['mr-1', styles.item_container].join(' ')} >
            {icon}
            <ConstructorElement handleClose={handleDelete}
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image_mobile}
            />
        </li>
    )
}

export default ItemContainer