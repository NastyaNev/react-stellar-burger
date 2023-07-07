import styles from "./app.module.css";
import AppHeader from "../app-header/app-header"
import Modal from "../modal/modal";
import Overlay from "../overlay/overlay";
import Main from "../main/main";
import { useState } from "react";

function App() {
  const root = document.getElementById('root');
  root.classList.add(styles.app);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentModal, setContentModal] = useState("");

  return (
    <div className={styles.page}>
      <AppHeader />
      <Main setIsModalOpen={setIsModalOpen} setContentModal={setContentModal} />
      {isModalOpen && (
        <>
          <Modal setIsModalOpen={setIsModalOpen} >
            {contentModal}
          </Modal>
          <Overlay setIsModalOpen={setIsModalOpen} />
        </>
      )}
    </div>
  );
}

export default App;
