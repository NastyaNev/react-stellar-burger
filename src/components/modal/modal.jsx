import React, { useEffect } from 'react'
import styles from './modal.module.css'
import ReactDOM from 'react-dom'
import iconClose from '../../images/icon 24x24.svg'

const modalRoot = document.getElementById('react_modal');

function Modal(props) {
    const { setIsModalOpen } = props;
    const onClickCloseButton = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        document.addEventListener('keydown', onEsc);

        function onEsc(e) {
            if (e.code === "Escape") {
                setIsModalOpen(false)
            }
        }

        return () => document.removeEventListener('keydown', onEsc);
    }, [])

    return ReactDOM.createPortal(
        (
            <div className={styles.modal}>
                <button className={['mt-15 mr-10', styles.button_close].join(' ')}><img src={iconClose} alt='закрыть' onClick={onClickCloseButton} /></button>
                {props.children}
            </div>
        ), modalRoot
    )
}

export default Modal