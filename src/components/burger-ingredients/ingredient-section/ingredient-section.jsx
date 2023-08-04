import React from 'react'
import styles from "./ingredient-section.module.css"
import Ingredient from './ingredient/ingredient'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function IngredientSection(props) {
  const { ingredName, type, customRef, setModalState } = props;
  const array = useSelector((state) => state.ingredientsReducer.array);

  const filtered = array.filter(array => {
    return array.type === type;
  })

  return (
    <li className={['mt-10', styles.ingredient_section].join(" ")} ref={customRef} >
      <h3 className='text text_type_main-medium'>{ingredName}</h3>
      <div className={['mt-6 ml-4', styles.menu].join(" ")}>
        {filtered.map(item => (
          <Ingredient key={item._id} item={item} setModalState={setModalState} />
        ))}
      </div>
    </li>
  )
}

IngredientSection.propTypes = {
  ingredName: PropTypes.string,
  type: PropTypes.string,
  customRef: PropTypes.object,
  setModalState: PropTypes.func
};

export default IngredientSection