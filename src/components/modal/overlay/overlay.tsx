import React from 'react'
import styles from './overlay.module.css'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('react_modal');
type TModalOverlayProps = {
    onClick: React.MouseEventHandler<HTMLDivElement>,
}

function ModalOverlay(props: TModalOverlayProps) {
    const { onClick } = props;
    return ReactDOM.createPortal(
        (
            <div className={styles.overlay} onClick={onClick}></div>
        ), modalRoot!
    )
}

export default ModalOverlay