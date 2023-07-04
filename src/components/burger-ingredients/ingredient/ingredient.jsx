import React from 'react'
import styles from "./ingredient.module.css"

function Ingredient(props) {
  const { ingredName } = props;

  return (
    <div className={['mt-10', styles.ingredient].join(" ")}>
      <h3 className='text text_type_main-medium'>{ingredName}</h3>
      <section className={['mt-6 ml-4', styles.menu].join(" ")}></section>
    </div>
  )
}

export default Ingredient