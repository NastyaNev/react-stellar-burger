import React from 'react'
import styles from "./ingredient-section.module.css"
import { data } from "../../../utils/data"
import Ingredient from './ingredient/ingredient'

function IngredientSection(props) {
  const { ingredName, type, setIsModalOpen } = props;
  const ingredients = data;
  const filtered = ingredients.filter(item => {
    return item.type === type;
  })

  return (
    <li className={['mt-10', styles.ingredient_section].join(" ")}>
      <h3 className='text text_type_main-medium'>{ingredName}</h3>
      <ul className={['mt-6 ml-4', styles.menu].join(" ")}>
        {filtered.map(item => (
          <Ingredient key={item._id} ingredient={item} setIsModalOpen={setIsModalOpen} />
        ))}
      </ul>
    </li>
  )
}

export default IngredientSection