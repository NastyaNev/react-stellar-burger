import React, { useRef } from 'react'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './item-container.module.css'
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { delConstItem } from '../../../../services/reducers/constructorSlice';
import { TIngredientConstructor } from '../../../../utils/types';

type TItemContainerProps = {
  ingredient: TIngredientConstructor,
  index: number,
  moveItems: (itemId: string, targetItemId: string) => void,
  id: string,
}

type TDragItem = {
  index: number,
  id: string,
}

type TCollectedProps = {
  isDragging: boolean,
}

function ItemContainer(props: TItemContainerProps) {
  const { ingredient, index, moveItems, id } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(delConstItem(ingredient));
  }

  const ref = useRef<HTMLLIElement>(null);

  const [, drop] = useDrop<TDragItem, unknown, unknown>({
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
      const hoverBoundingRect: DOMRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
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

  const [{ isDragging }, drag, preview] = useDrag<TDragItem, unknown, TCollectedProps>({
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

export default ItemContainer