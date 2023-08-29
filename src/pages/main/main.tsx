import React from 'react'
import DndContainer from '../../components/dnd-container/dnd-container'
import { Outlet } from 'react-router-dom'
import { TSetModalState } from '../../utils/types/types'

type TMainProps = {
  setModalState: TSetModalState
}

function Main(props: TMainProps) {
  const { setModalState } = props;
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