import React, { useRef } from 'react'
import { ConstructorElement, DeleteIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './item-container.module.css'
import { useDispatch } from 'react-redux';
import { DELETE_CONST_ITEM } from '../../../../store/actions/constructor';
import { DOWN_COUNT } from '../../../../store/actions/ingredients';
import { useDrag, useDrop } from 'react-dnd';

function ItemContainer(props) {
    const { ingredient, icon, index, moveListItem } = props;
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({ type: DELETE_CONST_ITEM, id: ingredient.id });
        dispatch({ type: DOWN_COUNT, _id: ingredient._id });
    }

    const [{ isDragging }, dragRef] = useDrag({
        type: 'items',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [spec, dropRef] = useDrop({
        accept: 'items',
        
            drop(ingredient) {
                let count = 0;
                ingredient.id = ingredient.id + (++count);
                // props.onDrop(ingredient);
            }
        ,
        hover: (item, monitor) => {
            const dragIndex = item.index
            const hoverIndex = index
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
            if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

            moveListItem(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const ref = useRef(null)
    const dragDropRef = dragRef(dropRef(ref))
    const opacity = isDragging ? 0 : 1

    return (
        <li className={['mr-1', styles.item_container].join(' ')} ref={dragDropRef} style={{ opacity }} >
            {icon}
            <ConstructorElement handleClose={handleDelete}
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image_mobile}
            />
        </li>
    )
}

export default ItemContainer