import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient.module.css'
import IngredientDitails from '../../../modal/ingredient-dilails/ingredient-dilails'
import { ingredientPropType } from '../../../../utils/prop-types'
import PropTypes from 'prop-types'
import { CHOOSE_MODAL, MODAL_OPEN } from '../../../../store/actions/modals'
import { useDispatch, useSelector } from 'react-redux'
import { useDrag } from "react-dnd";
import { GET_INGRED_INFO } from '../../../../store/actions/ingredient'

function Ingredient({ _id, name, price, image, image_mobile, image_large, calories, proteins, fat, carbohydrates, type }) {
    const countVisible = useSelector(state => {return state.ingredientsReducer.isVisible});
    const dispatch = useDispatch();
    const ingredient = { _id, name, price, image, image_mobile, image_large, calories, proteins, fat, carbohydrates, type };

    const [, dragRef] = useDrag({
        type: type,
        item: { _id, name, price, image_mobile }
    });

    const handleOpen = () => {
        dispatch({ type: MODAL_OPEN });
        dispatch({ type: CHOOSE_MODAL, typeModal: <IngredientDitails /> });
        dispatch({ type: GET_INGRED_INFO, ingredient });
    };

    // const counterElem = (<Counter count={1} size="default" extraClass="m-1" />);
    // // const  ingredientElem = (<li className={styles.card} onClick={handleOpen} ref={dragRef} >
    // //     <img src={image_mobile} alt={name} />
    // //     <div className={["mt-2", styles.span_container].join(" ")}>
    // //         <span className="text text_type_digits-default mr-2">{price}</span>
    // //         <CurrencyIcon type="primary" />
    // //     </div>
    // //     <p className={['text text_type_main-small mt-2', styles.ingredient_name].join(" ")}>{name}</p>
    // // </li>);
    // const targetDiv = [];

    // // targetDiv.push(ingredientElem)

    // if  (countVisible) {
    //     targetDiv.push(counterElem)
    // }

    const countSelector = (state) => {
        const mooved = state.constructorReducer.mooved;
        const array = state.ingredientsReducer.array;

        // const arrayIds = array.map((item) => item._id);
        const moovedIds = mooved.map((item) => item._id);

        const itemsWithCounter = array.filter((item) => moovedIds.includes(item._id));

        // itemsWithCounter.map((item) => item (countVisible === true) )

        console.log('itemsWithCounter', itemsWithCounter);

      };
    
      const counter = useSelector(countSelector);

    return (
        <li className={styles.card} onClick={handleOpen} ref={dragRef} >
            {countVisible &&
            <Counter count={1} size="default" extraClass="m-1" />
            }
            {/* {counter && <>{targetDiv}</>} */}
            <img src={image_mobile} alt={name} />
            <div className={["mt-2", styles.span_container].join(" ")}>
                <span className="text text_type_digits-default mr-2">{price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <p className={['text text_type_main-small mt-2', styles.ingredient_name].join(" ")}>{name}</p>
        </li>
    )
}

Ingredient.propTypes = {
    ingredient: ingredientPropType,
    setContentModal: PropTypes.func
};

export default Ingredient