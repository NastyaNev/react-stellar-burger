import React from 'react'
import ModalView from './modal-view'
import { TSetModalState } from '../../utils/types/types'

type TModalProps = {
    setModalState:TSetModalState,
    modalState: {
        isOpen: boolean;
        chooseModal: null | JSX.Element;
        onClose: (() => void) | null
    }
}

function Modal(props: TModalProps) {
    const { setModalState, modalState } = props;

    const handleClose = () => {
        if (modalState.onClose) { modalState.onClose() }
        setModalState({ isOpen: false, chooseModal: null, onClose: null });
    };

    return <ModalView onClose={handleClose} >{modalState.chooseModal!}</ModalView>
}

export default Modal