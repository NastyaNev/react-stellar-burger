import React, { useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header"
import Modal from "../modal/modal";
import { useDispatch, useSelector } from "react-redux";
import DndContainer from "../dnd-container/dnd-container";
import { getItems } from "../../store/actions/ingredients";
import { getAnswer } from "../../store/actions/constructor";

function App() {
  const openModal = useSelector((state) => state.modalsReducer.isOpen);
  const chooseModal = useSelector((state) => state.modalsReducer.typeModal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [])

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
