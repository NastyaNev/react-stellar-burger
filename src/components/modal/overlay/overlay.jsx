import styles from './overlay.module.css'
import PropTypes from 'prop-types'

function Overlay({ setIsModalOpen }) {
    const onClickOverlay = () => {
        setIsModalOpen(false)
    }

    return (
        <div className={styles.overlay} onClick={onClickOverlay}></div>
    )
}

Overlay.propTypes = {
    setIsModalOpen: PropTypes.func
};

export default Overlay