import React, { useState } from 'react'
import DndContainer from '../../components/dnd-container/dnd-container'
import Modal from '../../components/modal/modal';

function Main() {
  const [modalState, setModalState] = useState({ isOpen: false, chooseModal: null, onClose: null });

  return (
    <>
      <main>
        <DndContainer setModalState={setModalState} />
      </main>
      {modalState.isOpen && <Modal setModalState={setModalState} modalState={modalState} >
        {modalState.chooseModal}
      </Modal>
      }
    </>
  )
}

export default Main