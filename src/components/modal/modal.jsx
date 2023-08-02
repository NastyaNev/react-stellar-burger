import React, { useEffect } from 'react'
import styles from './modal.module.css'
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from './overlay/overlay'
import PropTypes from 'prop-types'

const modalRoot = document.getElementById('react_modal');

function Modal(props) {
    const { setModalState, modalState } = props;

    const handleClose = () => {
        if (modalState.onClose) { modalState.onClose() }
        setModalState({ isOpen: false, chooseModal: null, onClose: null });
    };

    useEffect(() => {
        function onEsc(e) {
            if (e.code === "Escape") {
                handleClose()
            }
        }

        document.addEventListener('keydown', onEsc);

        return () => document.removeEventListener('keydown', onEsc);
    }, [])

    return ReactDOM.createPortal(
        <>
            <div className={styles.modal} >
                <button className={['mt-15 mr-10', styles.button_close].join(' ')}><CloseIcon alt='закрыть' onClick={handleClose} /></button>
                {props.children}
            </div>
            <ModalOverlay onClick={handleClose} />
        </>
        , modalRoot
    )
}

Modal.propTypes = {
    modalState: PropTypes.object,
    setModalState: PropTypes.func
};

export default Modal