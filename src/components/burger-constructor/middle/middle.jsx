import React, { useState, useCallback, useEffect } from 'react'
import Bun from '../bun/bun';
import styles from './middle.module.css'
import ItemContainer from './item-container/item-container'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from "react-dnd";
import { GET_MOOVED_ITEMS, REORDER_INGREDS } from '../../../services/actions/constructor'
import { v4 as uuidv4 } from 'uuid';

function Middle(props) {
    const bun = useSelector((state) => state.constructorReducer.bun);
    const mooved = useSelector((state) => state.constructorReducer.mooved);
    const dispatch = useDispatch();

    const [{ isHover }, dropTarget] = useDrop({
        accept: ['sauce', 'main', 'bun'],
        drop(ingredient) {
            dispatch({ type: GET_MOOVED_ITEMS, ingredient: { ...ingredient, id: uuidv4() } });
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    });

    const borderColor = isHover ? styles.onHover : 'transparent';

    const moveItems = useCallback((itemId, targetItemId) => {
        dispatch({ type: REORDER_INGREDS, itemId, targetItemId })
    }, []);

    return (
        <ul className={["ml-4 mt-25", styles.constructor_list].join(" ")} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} ref={dropTarget}>
            <Bun found={bun} className='ml-8' part="top" note="(верх)" />
            <div style={{ borderColor }}>
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

Middle.propTypes = {
    typeList: PropTypes.array
};


export default Middle