import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header"
import Modal from "../modal/modal";
import Overlay from "../overlay/overlay";
import Main from "../main/main";
import { useState } from "react";
import OrderDitails from "../modal/order-ditails/order-ditails";
import IngredientDitails from "../modal/ingredient-dilails/ingredient-dilails";

function App() {
  const root = document.getElementById('root');
  root.classList.add(styles.app);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.page}>
      <AppHeader />
      <Main setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <>
          <Modal setIsModalOpen={setIsModalOpen} >
            <IngredientDitails />
          </Modal>
          <Overlay setIsModalOpen={setIsModalOpen} />
        </>
      )}
    </div>
  );
}

export default App;
