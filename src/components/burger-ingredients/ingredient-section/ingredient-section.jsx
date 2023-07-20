import React from 'react'
import styles from "./ingredient-section.module.css"
import Ingredient from './ingredient/ingredient'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';

function IngredientSection(props) {
  const { ingredName, type, customRef } = props;
  const array = useSelector((state) => state.ingredientsReducer.array);

  const filtered = array.filter(array => {
    return array.type === type;
  })

  return (
    <li className={['mt-10', styles.ingredient_section].join(" ")} ref={customRef} >
      <h3 className='text text_type_main-medium'>{ingredName}</h3>
      <ul className={['mt-6 ml-4', styles.menu].join(" ")}>
        {filtered.map(item => (
          <Ingredient key={item._id} {...item} />
        ))}
      </ul>
    </li>
  )
}

IngredientSection.propTypes = {
  ingredName: PropTypes.string,
  type: PropTypes.string,
  customRef: PropTypes.any // TODO: change any to more strict type
};

export default IngredientSection