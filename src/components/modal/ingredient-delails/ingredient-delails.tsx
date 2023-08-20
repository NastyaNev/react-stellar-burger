import React, { useEffect } from 'react'
import styles from './ingredient-delails.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom';
import { delIngred, getIngred } from '../../../services/reducers/ingredientSlice';
import { TIngredient } from '../../../utils/types';

function IngredientDitails() {   
    const dispatch = useDispatch();
    const { id } = useParams();
    const { state } = useLocation();
    const ings = useSelector((state: any) => state.ingredients.array)
    const ing = useSelector((state: any) => state.ingredient.ing);

    useEffect(() => {
        if (ings) {
            const ingredient = ings ? ings.find((item: TIngredient) => item._id === id) : null;
            dispatch(getIngred(ingredient));
        }
    }, [ings])

    useEffect(() => {
        return () => {
            dispatch(delIngred());
        }
    }, [])

    const setClass = () => {
        return state === null ? `text text_type_main-large mt-10 ml-10 ${styles.new_title_modal}`
            : `text text_type_main-large mt-10 ml-10 ${styles.title_modal}`
    }

    if (ing == null) {
        return null
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