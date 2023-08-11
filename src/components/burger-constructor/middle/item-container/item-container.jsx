import React, { useRef } from 'react'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './item-container.module.css'
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../../../utils/prop-types';
import { delConstItem } from '../../../../services/reducers/constructorSlice';

function ItemContainer(props) {
  const { ingredient, index, moveItems, id } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(delConstItem(ingredient));
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

  const className = `${isDragging ? styles.opacity : ''}`;

  preview(drop(ref));

  return (
    <li className={['mr-1', styles.item_container, className].join(' ')} ref={ref} >
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

ItemContainer.propTypes = {
  ingredient: ingredientPropType,
  index: PropTypes.number,
  moveItems: PropTypes.func,
  id: PropTypes.string
};

export default ItemContainer