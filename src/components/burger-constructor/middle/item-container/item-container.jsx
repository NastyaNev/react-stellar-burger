import React, { useRef } from 'react'
import { ConstructorElement, DeleteIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './item-container.module.css'
import { useDispatch } from 'react-redux';
import { DELETE_CONST_ITEM } from '../../../../services/actions/constructor';
import { useDrag, useDrop } from 'react-dnd';

function ItemContainer(props) {
  const { ingredient, index, moveItems, id } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: DELETE_CONST_ITEM, id: ingredient.id });
  }

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "item",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItems(item.id, id);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: "item",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging()
      };
    }
  });

  const opacity = isDragging ? 0 : 1;

  preview(drop(ref));

  return (
    <li className={['mr-1', styles.item_container].join(' ')} style={{ opacity }} ref={ref} >
      <div ref={drag}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement handleClose={handleDelete}
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image_mobile}
      />
    </li>
  )
}

export default ItemContainer