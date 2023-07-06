import React from 'react'
import styles from './ingredient-dilails.module.css'

function IngredientDitails() {
    const data = {
        "_id": "60666c42cc7b410027a1a9b1",
        "name": "Краторная булка N-200i",
        "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 0
    }

    return (
        <div className={styles.data_ditails}>
            <h3 className='text text_type_main-large mt-10 ml-10'>Детали ингредиента</h3>
            <div className={styles.contain}>
                <img className={styles.image} src={data.image_large} alt={data.name} />
                <p className='text text_type_main-medium mt-4'>{data.name}</p>
                <ul className={['mt-8 mb-15 text_color_inactive', styles.compound].join(' ')}>
                    <li className={styles.compound_item}>
                        <p className='text text_type_main-default'>Калории, ккал</p>
                        <span className='text text_type_digits-default'>{data.calories}</span>
                    </li>
                    <li className={['ml-5', styles.compound_item].join(' ')}>
                        <p className='text text_type_main-default'>Белки, г</p>
                        <span className='text text_type_digits-default'>{data.proteins}</span>
                    </li>
                    <li className={['ml-5', styles.compound_item].join(' ')}>
                        <p className='text text_type_main-default'>Жиры, г</p>
                        <span className='text text_type_digits-default'>{data.fat}</span>
                    </li>
                    <li className={['ml-5', styles.compound_item].join(' ')}>
                        <p className='text text_type_main-default'>Углеводы, г</p>
                        <span className='text text_type_digits-default'>{data.carbohydrates}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default IngredientDitails