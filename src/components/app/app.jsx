import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header"
import Modal from "../modal/modal";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getArray } from '../api/api'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentModal, setContentModal] = useState("");
  const [ingArray, setIngArray] = useState([]);

  useEffect(() => {
    getArray()
      .then((res) => { setIngArray(res) })
      .catch(err => {
        console.log(err);
      })
  }, [])

  if (ingArray.length === 0) {
    return null
  }

  const array = ingArray.data;

  return (
    <div className={styles.page}>
      <AppHeader />
      <main>
        <ul className={styles.sections}>
          <BurgerIngredients className={styles.section} setIsModalOpen={setIsModalOpen} setContentModal={setContentModal} array={array} title="Соберите бургер" />
          <BurgerConstructor className={styles.section} setIsModalOpen={setIsModalOpen} setContentModal={setContentModal} array={array} />
        </ul>
      </main>
      {isModalOpen && (
        <>
          <Modal setIsModalOpen={setIsModalOpen} >
            {contentModal}
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;
