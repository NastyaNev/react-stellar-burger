import React from 'react'
import DndContainer from '../../components/dnd-container/dnd-container'
import { Outlet } from 'react-router-dom'

function Main({setModalState}) {
  return (
    <>
      <main>
        <DndContainer setModalState={setModalState} />
        <Outlet />
      </main>
    </>
  )
}

export default Main