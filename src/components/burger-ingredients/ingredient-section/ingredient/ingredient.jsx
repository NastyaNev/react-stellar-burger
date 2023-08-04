import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient.module.css'
import IngredientDitails from '../../../modal/ingredient-delails/ingredient-delails'
import { useDispatch, useSelector } from 'react-redux'
import { useDrag } from "react-dnd";
import { DEL_INGRED_INFO, GET_INGRED_INFO } from '../../../../services/actions/ingredient'
import { ingredientPropType } from '../../../../utils/prop-types'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Ingredient(props) {
    const { setModalState, item } = props;
    const dispatch = useDispatch();
    const ingredient = item;

    const [, dragRef] = useDrag({
        type: item.type,
        item: item
    });

    const handleOpen = () => {
        setModalState({isOpen: true, chooseModal: <IngredientDitails />, onClose: () => {
            dispatch({ type: DEL_INGRED_INFO });
        }});
        dispatch({ type: GET_INGRED_INFO, ingredient });
    };

    const countSelector = (state) => {
        if (item.type === 'bun') {
            const bun = state.constructorReducer.bun;

            return bun && bun._id === item._id ? 1 : 0;
        }
        else if (['sauce', 'main'].includes(item.type)) {
            const elemsWithCounter = state.constructorReducer.mooved.filter((i) => i._id === ingredient._id);
            return elemsWithCounter.length;
        }

        return 0;
    };

    const counter = useSelector(countSelector);

    return (
        <Link to={`/ingredients/${item._id}`} className={styles.card} onClick={handleOpen} ref={dragRef}>
            {counter > 0 &&
                <Counter count={counter} size="default" extraClass="m-1" />
            }
            <img src={item.image_mobile} alt={item.name} />
            <div className={["mt-2", styles.span_container].join(" ")}>
                <span className="text text_type_digits-default mr-2">{item.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <p className={['text text_type_main-small mt-2', styles.ingredient_name].join(" ")}>{item.name}</p>
        </Link>
    )
}

Ingredient.propTypes = {
    item: ingredientPropType,
    setModalState: PropTypes.func
};

export default Ingredient