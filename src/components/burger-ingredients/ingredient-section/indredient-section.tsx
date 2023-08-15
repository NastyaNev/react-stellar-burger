import React from 'react'
import styles from "./ingredient-section.module.css"
import Ingredient from './ingredient/ingredient'
import { useSelector } from 'react-redux';
import { TIngredient } from '../../../types/types';

type TIngredientSectionProps = {
  ingredName: string,
  type: string,
  customRef: React.RefObject<HTMLLIElement>,
};

function IngredientSection(props: TIngredientSectionProps) {
  const { ingredName, type, customRef } = props;
  const array: TIngredient[] = useSelector((state: any) => state.ingredients.array);

  const filtered = array.filter((item: TIngredient) => {
    return item.type === type;
  })

  return (
    <li className={['mt-10', styles.ingredient_section].join(" ")} ref={customRef} >
      <h3 className='text text_type_main-medium'>{ingredName}</h3>
      <ul className={['mt-6 ml-4', styles.menu].join(" ")}>
        {filtered.map((item: TIngredient) => (
          <Ingredient key={item._id} item={item} />
        ))}
      </ul>
    </li>
  )
}

export default IngredientSection