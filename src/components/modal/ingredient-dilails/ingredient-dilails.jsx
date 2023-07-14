import React from 'react'
import styles from './ingredient-dilails.module.css'
import { ingredientPropType } from '../../../utils/prop-types'

function IngredientDitails({ ingredient }) {
    
    return (
        <div>
            <h3 className={['text text_type_main-large mt-10 ml-10', styles.title_modal].join(' ')}>Детали ингредиента</h3>
            <div className={styles.contain}>
                <img src={ingredient.image_large} alt={ingredient.name} />
                <p className={['text text_type_main-medium mt-4', styles.name_ingredient].join(' ')}>{ingredient.name}</p>
                <ul className={['mt-8 mb-15 text_color_inactive', styles.compound].join(' ')}>
                    <li className={styles.compound_item}>
                        <p className='text text_type_main-default'>Калории,ккал</p>
                        <span className={['text text_type_digits-default', styles.quantity_compound_item].join(' ')}>{ingredient.calories}</span>
                    </li>
                    <li className={['ml-5', styles.compound_item].join(' ')}>
                        <p className='text text_type_main-default'>Белки, г</p>
                        <span className={['text text_type_digits-default', styles.quantity_compound_item].join(' ')}>{ingredient.proteins}</span>
                    </li>
                    <li className={['ml-5', styles.compound_item].join(' ')}>
                        <p className='text text_type_main-default'>Жиры, г</p>
                        <span className={['text text_type_digits-default', styles.quantity_compound_item].join(' ')}>{ingredient.fat}</span>
                    </li>
                    <li className={['ml-5', styles.compound_item].join(' ')}>
                        <p className='text text_type_main-default'>Углеводы, г</p>
                        <span className={['text text_type_digits-default', styles.quantity_compound_item].join(' ')}>{ingredient.carbohydrates}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

IngredientDitails.propTypes = {
    ingredient: ingredientPropType
};

export default IngredientDitails