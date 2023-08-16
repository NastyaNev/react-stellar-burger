import React, { useEffect } from 'react'
import styles from './modal.module.css'
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from './overlay/overlay'

const modalRoot = document.getElementById('react_modal');
type TModalViewPropos = {
    onClose: () => void,
    children: JSX.Element
}

function ModalView(props: TModalViewPropos) {
    const { onClose, children } = props;

    const handleClose = () => {
        if (onClose) { onClose() }
    };

    useEffect(() => {
        function onEsc(e: KeyboardEvent): void {
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
                <button className={['mt-15 mr-10', styles.button_close].join(' ')}><CloseIcon onClick={handleClose} type='primary' /></button>
                {children}
            </div>
            <ModalOverlay onClick={handleClose} />
        </>
        , modalRoot!
    )
}

export default ModalView