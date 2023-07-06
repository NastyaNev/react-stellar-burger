import React from 'react'
import styles from './overlay.module.css'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('react_modal');

function Overlay({ setIsModalOpen }) {
    const onClickOverlay = () => {
        setIsModalOpen(false)
    }

    return ReactDOM.createPortal(
        (
            <div className={styles.overlay} onClick={onClickOverlay}></div>
        ), modalRoot
    )
}

export default Overlay