import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header"
import Modal from "../modal/modal";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getArray } from '../api/api'
import { useSelector } from "react-redux";

function App() {
  // const [ingArray, setIngArray] = useState([]);
  const openModal = useSelector((state) => state.modalsReducer.isOpen);
  const chooseModal = useSelector((state) => state.modalsReducer.typeModal);

  // useEffect(() => {
  //   getArray()
  //     .then((res) => { setIngArray(res) })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, [])

  // if (ingArray.length === 0) {
  //   return null
  // }

  // const array = ingArray.data;

  return (
    <div className={styles.page}>
      <AppHeader />
      <main>
        <ul className={styles.sections}>
          <BurgerIngredients className={styles.section} title="Соберите бургер" />
          <BurgerConstructor className={styles.section} />
        </ul>
      </main>
      {openModal && <Modal >
        {chooseModal}
      </Modal>
      }
    </div >
  );
}

export default App;
