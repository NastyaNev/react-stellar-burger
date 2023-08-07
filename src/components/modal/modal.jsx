import React from 'react'
import PropTypes from 'prop-types'
import ModalView from './modal-view'

function Modal(props) {
    const { setModalState, modalState } = props;

    const handleClose = () => {
        if (modalState.onClose) { modalState.onClose() }
        setModalState({ isOpen: false, chooseModal: null, onClose: null });
    };

    return <ModalView onClose={handleClose} >{modalState.chooseModal}</ModalView>
}

Modal.propTypes = {
    modalState: PropTypes.object,
    setModalState: PropTypes.func
};

export default Modal