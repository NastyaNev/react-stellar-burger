import styles from './overlay.module.css'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

const modalRoot = document.getElementById('react_modal');

function Overlay({ setIsModalOpen }) {
    const onClickOverlay = () => {
        setIsModalOpen(false)
    }

    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={onClickOverlay}></div>
        , modalRoot
    )
}

Overlay.propTypes = {
    setIsModalOpen: PropTypes.func
};

export default Overlay