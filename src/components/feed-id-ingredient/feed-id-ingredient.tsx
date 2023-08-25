import React from 'react'
import { TIngredient } from '../../utils/types/types'
import styles from './feed-id-ingredient.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

type TFeedIdIngredientProps = {
    item: TIngredient,
    rest: TIngredient[]
}

function FeedIdIngredient(props: TFeedIdIngredientProps) {
    const { item, rest } = props;
    const restIds = rest.map(i => i._id);
    const ingredQuantityIds = restIds.filter(i => item._id === i);
    let ingredQuantity;
    if (item.type === "bun") { ingredQuantity = 2 } else { ingredQuantity = ingredQuantityIds.length };

    return (
        <li className={['mr-6', styles.feed_id_ingredient].join(' ')}>
            <div className={styles.image_container}>
                <img className={styles.image} src={item.image_mobile} alt={item.name} />
                <p className='ml-4 text text_type_main-small'>{item.name}</p>
            </div>
            <div className={styles.span_container}>
                <p className='mr-2 text text_type_digits-default'>{ingredQuantity} x</p>
                <span className='mr-2 text text_type_digits-default'>{item.price}</span>
                <CurrencyIcon type="primary" />
            </div>
        </li>
    )
}

export default FeedIdIngredient