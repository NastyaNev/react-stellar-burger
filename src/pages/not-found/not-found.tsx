import React from 'react'
import notFound from '../../images/NotFound.svg'
import styles from './not-found.module.css'

function NotFound() {
  return (
    <div className={styles.not_found}>
      <p className='text text_type_main-medium'>Страница не найдена</p>
      <img className={['mt-4', styles.not_found_image].join(" ")} src={notFound} alt='Страница не найдена' />
    </div>
  )
}

export default NotFound