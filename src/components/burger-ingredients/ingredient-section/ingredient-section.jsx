import React, { useEffect } from 'react'
import styles from "./ingredient-section.module.css"
import Ingredient from './ingredient/ingredient'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_ITEM, getItems } from '../../../store/actions/ingredients';

function IngredientSection(props) {
  const { ingredName, type } = props;
  const array = useSelector((state) => state.ingredientsReducer.array);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [])

  const filtered = array.filter(array => {
    return array.type === type;
  })

  return (
    <li className={['mt-10', styles.ingredient_section].join(" ")}>
      <h3 className='text text_type_main-medium'>{ingredName}</h3>
      <ul className={['mt-6 ml-4', styles.menu].join(" ")}>
        {filtered.map(item => ( 
          <Ingredient key={item._id} {...item} />
        ))}
      </ul>
    </li>
  )

  // if (apiFailed) {
  //   return <p>Произошла ошибка при получении данных</p>
  // } else if (apiRequest) {
  //   return <p>Загрузка...</p>
  // } else {
  //   return <>{array}</>;
  // }
}

IngredientSection.propTypes = {
  ingredName: PropTypes.string,
  type: PropTypes.string
};

export default IngredientSection