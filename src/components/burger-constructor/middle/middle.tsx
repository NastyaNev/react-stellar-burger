import React, { useCallback, useEffect } from 'react'
import Bun from '../bun/bun';
import styles from './middle.module.css'
import ItemContainer from './item-container/item-container'
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from 'uuid';
import { getMoovedItems, sortIngreds } from '../../../services/reducers/constructorSlice';
import { TIngredientConstructor } from '../../../types/types';

type TDragItem = {
    ingredient: TIngredientConstructor,
    id: string,
}

function Middle() {
    const bun: TIngredientConstructor = useSelector((state: any) => state.constructorBurger.bun);
    const mooved: TIngredientConstructor[] = useSelector((state: any) => state.constructorBurger.mooved);
    const dispatch = useDispatch();

    const [, dropTarget] = useDrop<TDragItem, unknown, unknown>({
        accept: ['sauce', 'main', 'bun'],
        drop(ingredient) {
            dispatch(getMoovedItems(ingredient = { ...ingredient, id: uuidv4() }))
        }
    });

    const moveItems = useCallback((itemId: string, targetItemId: string) => {
        const index = { itemId, targetItemId };
        dispatch(sortIngreds(index))
    }, []);

    return (
        <ul className={["ml-4 mt-25", styles.constructor_list].join(" ")} ref={dropTarget}>
            <Bun found={bun} className='ml-8' part="top" note="(верх)" />
            <div>
                <ul className={[styles.middle, 'custom-scroll'].join(" ")}  >
                    {mooved.map((item, index) => (
                        <ItemContainer key={item.id} id={item.id} ingredient={item} index={index} moveItems={moveItems} />
                    ))}
                </ul>
            </div>
            <Bun found={bun} className='ml-8' part="bottom" note="(низ)" />
        </ul>
    )
}

export default Middle 