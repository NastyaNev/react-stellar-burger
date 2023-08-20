import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient.module.css'
import { useSelector } from 'react-redux'
import { useDrag } from "react-dnd"
import { Link, useLocation } from 'react-router-dom'
import { TIngredient } from '../../../../utils/types'
import { RootState } from '../../../../store'
import { useAppSelector } from '../../../../hooks'

type TIngredientProps = {
    item: TIngredient,
};

type TCollectedProps = {
    isDragging: boolean,
}

function Ingredient(props: TIngredientProps) {
    const { item } = props;
    const ingredient = item;
    const location = useLocation();

    const [, dragRef] = useDrag<unknown, unknown, TCollectedProps>({
        type: item.type,
        item: item
    });

    const countSelector = (state: RootState) => {
        if (item.type === 'bun') {
            const bun = state.constructorBurger.bun;

            return bun && bun._id === item._id ? 1 : 0;
        }
        else if (['sauce', 'main'].includes(item.type)) {
            const elemsWithCounter = state.constructorBurger.mooved.filter((i: TIngredient) => i._id === ingredient._id);
            return elemsWithCounter.length;
        }

        return 0;
    };

    const counter = useAppSelector(countSelector);

    return (
        <li>
            <Link to={`/ingredients/${item._id}`} state={{ background: location }} className={styles.card} ref={dragRef}  >
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
        </li>
    )
}

export default Ingredient