import React from 'react'
import styles from "./ingredient-section.module.css"
import { data } from "../../../utils/data"
import Ingredient from './ingredient/ingredient'

function IngredientSection(props) {
  const { ingredName } = props;
  const ingredients = data;

  return (
    <li className={['mt-10', styles.ingredient_section].join(" ")}>
      <h3 className='text text_type_main-medium'>{ingredName}</h3>
      <section className={['mt-6 ml-4', styles.menu].join(" ")}>
        {ingredients.map(item => (
          <Ingredient key={item._id} ingredient={item} />
        ))}
      </section>
    </li>
  )
}

export default IngredientSection