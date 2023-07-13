import React, { useEffect } from 'react'
import styles from './modal.module.css'
import ReactDOM from 'react-dom'
import iconClose from '../../images/icon 24x24.svg'
import PropTypes from 'prop-types'
import { store } from '../../store'

const modalRoot = document.getElementById('react_modal');

function Modal(props) {
    const handleClose = () => {
        store.dispatch({ type: 'MODAL_CLOSE' });
    };

    useEffect(() => {
        document.addEventListener('keydown', onEsc);

        function onEsc(e) {
            if (e.code === "Escape") {
                handleClose()
            }
        }

        return () => document.removeEventListener('keydown', onEsc);
    }, [])

    return ReactDOM.createPortal(
        <>
            <div className={styles.modal}>
                <button className={['mt-15 mr-10', styles.button_close].join(' ')}><img src={iconClose} alt='закрыть' onClick={handleClose} /></button>
                {props.children}
            </div>
            <div className={styles.overlay} onClick={handleClose}></div>
        </>
        , modalRoot
    )
}

Modal.propTypes = {
    handleClose: PropTypes.func
};

export default Modal