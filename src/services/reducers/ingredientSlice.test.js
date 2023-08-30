import { getIngred, delIngred } from './ingredientSlice';
import ingredReducer from './ingredientSlice';

const ingredInfo = {
    _id: "643d69a5c3f7b9001cfa0942",
    name: "Соус Spicy-X",
    type: "sauce",
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: "https://code.s3.yandex.net/react/code/sauce-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
    __v: 0
}

describe('Тестирование редьюсера модалки с информацией об ингредиенте', () => {
    test('Добавление информации', () => {
        expect(ingredReducer(undefined, getIngred(ingredInfo))).toEqual({ ing: ingredInfo })
        expect(ingredReducer({ ing: null }, getIngred(ingredInfo))).toEqual({ ing: ingredInfo })
    })
    test('Удаление информации', () => {
        expect(ingredReducer(undefined, delIngred(null))).toEqual({ ing: null })
        expect(ingredReducer({ ing: ingredInfo }, delIngred(null))).toEqual({ ing: null })
    })
})