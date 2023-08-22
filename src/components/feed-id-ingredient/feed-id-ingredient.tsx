import React from 'react'
import { TIngredientConstructor } from '../../utils/types'

type TFeedIdIngredientProps = {
    item: TIngredientConstructor
}

function FeedIdIngredient(props: TFeedIdIngredientProps) {
    const { item } = props;
    return (
        <li>
            <div>
                <img src={item.image_mobile} alt={item.name} />
                <p>{item.name}</p>
            </div>
            <div>
                <span></span>
            </div>
        </li>
    )
}

export default FeedIdIngredient