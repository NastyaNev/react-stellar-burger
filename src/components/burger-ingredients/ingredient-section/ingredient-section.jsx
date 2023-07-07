import React, { useEffect, useState } from 'react'
import styles from "./ingredient-section.module.css"
import Ingredient from './ingredient/ingredient'

function IngredientSection(props) {
  const { ingredName, type, setIsModalOpen, setContentModal } = props;
  const [ingArray, setIngArray] = useState([]);

  useEffect(() => {
    const getArray = async () => {
      const res = await fetch('https://norma.nomoreparties.space/api/ingredients ')
      const arr = await res.json()
      setIngArray(arr)
    }
    getArray();
  }, [])



  if (ingArray.length === 0) {
    return null
  }

  console.log(ingArray)

  const filtered = ingArray.data.filter(item => {
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

export default IngredientSection