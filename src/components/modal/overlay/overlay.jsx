import React from 'react'
import styles from './overlay.module.css'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const modalRoot = document.getElementById('react_modal');

function ModalOverlay({onClick}) {
    return ReactDOM.createPortal(
        (
            <div className={styles.overlay} onClick={onClick}></div>
        ), modalRoot
    )
}

ModalOverlay.propTypes = {
    onClick: PropTypes.func
  };

export default ModalOverlay