import React from 'react'
import styles from "./ingredient-section.module.css"
import Ingredient from './ingredient/ingredient'
import PropTypes from 'prop-types'

function IngredientSection(props) {
  const { ingredName, type, setIsModalOpen, setContentModal, array } = props;

  const filtered = array.filter(item => {
    return item.type === type;
  })

  return (
    <li className={['mt-10', styles.ingredient_section].join(" ")}>
      <h3 className='text text_type_main-medium'>{ingredName}</h3>
      <ul className={['mt-6 ml-4', styles.menu].join(" ")}>
        {filtered.map(item => (
          <Ingredient key={item._id} ingredient={item} setIsModalOpen={setIsModalOpen} setContentModal={setContentModal} />
        ))}
      </ul>
    </li>
  )
}

IngredientSection.propTypes = {
  array: PropTypes.array,
  ingredName: PropTypes.string,
  type: PropTypes.string,
  setIsModalOpen: PropTypes.func,
  setContentModal: PropTypes.func
};

export default IngredientSection