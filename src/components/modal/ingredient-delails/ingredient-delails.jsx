import React, { useEffect } from 'react'
import styles from './ingredient-delails.module.css'
import { useSelector } from 'react-redux'
import { DEL_INGRED_INFO } from '../../../services/actions/ingredient';
import Modal from '../modal';
import { useLocation, useParams } from 'react-router-dom';
import { getItems } from '../../../services/actions/ingredients';


function IngredientDitails() {
    // const ing = useSelector(state => state.ingredReducer.ing);
    console.log('тут')
    const ings = useSelector(state => state.ingredientsReducer.array)
    const { id } = useParams();
    const ing = ings.find((item)  => item._id === id);
    const { state } = useLocation();

    const setClass = () => {
        return state === null ? `text text_type_main-large mt-10 ml-10 ${styles.new_title_modal}`
            : `text text_type_main-large mt-10 ml-10 ${styles.title_modal}`
    }

    return (
        <div>
            <h3 className={setClass()}>Детали ингредиента</h3>
            <div className={styles.contain}>
                <img src={ing.image_large} alt={ing.name} />
                <p className={['text text_type_main-medium mt-4', styles.name_ingredient].join(' ')}>{ing.name}</p>
                <ul className={['mt-8 mb-15 text_color_inactive', styles.compound].join(' ')}>
                    <li className={styles.compound_item}>
                        <p className='text text_type_main-default'>Калории,ккал</p>
                        <span className={['text text_type_digits-default', styles.quantity_compound_item].join(' ')}>{ing.calories}</span>
                    </li>
                    <li className={['ml-5', styles.compound_item].join(' ')}>
                        <p className='text text_type_main-default'>Белки, г</p>
                        <span className={['text text_type_digits-default', styles.quantity_compound_item].join(' ')}>{ing.proteins}</span>
                    </li>
                    <li className={['ml-5', styles.compound_item].join(' ')}>
                        <p className='text text_type_main-default'>Жиры, г</p>
                        <span className={['text text_type_digits-default', styles.quantity_compound_item].join(' ')}>{ing.fat}</span>
                    </li>
                    <li className={['ml-5', styles.compound_item].join(' ')}>
                        <p className='text text_type_main-default'>Углеводы, г</p>
                        <span className={['text text_type_digits-default', styles.quantity_compound_item].join(' ')}>{ing.carbohydrates}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default IngredientDitails