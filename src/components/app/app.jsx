import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header"
import Modal from "../modal/modal";
import { useDispatch } from "react-redux";
import DndContainer from "../dnd-container/dnd-container";
import { getItems } from "../../services/actions/ingredients";

function App() {
  const dispatch = useDispatch();

  const [modalState, setModalState] = useState({isOpen: false, chooseModal: null, onClose: null});
  
  useEffect(() => {
    dispatch(getItems())
  }, [])

  return (
    <div className={styles.page}>
      <AppHeader />
      <main>
        <DndContainer setModalState={setModalState} />
      </main>
      {modalState.isOpen && <Modal setModalState={setModalState} modalState={modalState} >
        {modalState.chooseModal}
      </Modal>
      }
    </div >
  );
}

export default App;
