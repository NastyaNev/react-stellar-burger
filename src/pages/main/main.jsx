import React from 'react'
import DndContainer from '../../components/dnd-container/dnd-container'

function Main({setModalState}) {
  return (
    <>
      <main>
        <DndContainer setModalState={setModalState} />
      </main>
    </>
  )
}

export default Main