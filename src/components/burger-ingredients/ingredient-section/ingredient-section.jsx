import React from 'react'
import styles from "./ingredient-section.module.css"
import Ingredient from './ingredient/ingredient'
import PropTypes from 'prop-types'
import { ingredientPropType } from '../../../utils/prop-types';
import { useDispatch } from 'react-redux';
import { GET_ARRAY_SUCCESS } from '../../../store/actions/ingredients';

function IngredientSection(props) {
  const { ingredName, type } = props;

  const dispatch = useDispatch();

  const arrayIng = () => {
    dispatch({ type: GET_ARRAY_SUCCESS });
  };

  const filtered = arrayIng.filter(item => {
    return item.type === type;
  })

  return (
    <li className={['mt-10', styles.ingredient_section].join(" ")}>
      <h3 className='text text_type_main-medium'>{ingredName}</h3>
      <ul className={['mt-6 ml-4', styles.menu].join(" ")}>
        {filtered.map(item => (
          <Ingredient key={item._id} ingredient={item} />
        ))}
      </ul>
    </li>
  )
}

IngredientSection.propTypes = {
  array: PropTypes.arrayOf(ingredientPropType),
  ingredName: PropTypes.string,
  type: PropTypes.string,
  setContentModal: PropTypes.func
};

export default IngredientSection