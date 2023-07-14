import React from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header"
import Modal from "../modal/modal";
import { useSelector } from "react-redux";
import DndContainer from "../dnd-container/dnd-container";

function App() {
  const openModal = useSelector((state) => state.modalsReducer.isOpen);
  const chooseModal = useSelector((state) => state.modalsReducer.typeModal);

  return (
    <div className={styles.page}>
      <AppHeader />
      <main>
        <DndContainer />
      </main>
      {openModal && <Modal >
        {chooseModal}
      </Modal>
      }
    </div >
  );
}

export default App;
