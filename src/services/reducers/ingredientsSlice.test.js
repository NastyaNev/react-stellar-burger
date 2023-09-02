import ingredsReducer from './ingredientsSlice';
import { getIngreds, getIngredsSuccess, getIngredsFailed } from './ingredientsSlice';

const ingredientsArray = [
    {
        "_id": "643d69a5c3f7b9001cfa093c",
        "name": "Краторная булка N-200i", "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 0
    },
    {
        "_id": "643d69a5c3f7b9001cfa0941",
        "name": "Биокотлета из марсианской Магнолии",
        "type": "main",
        "proteins": 420,
        "fat": 142,
        "carbohydrates": 242,
        "calories": 4242,
        "price": 424,
        "image": "https://code.s3.yandex.net/react/code/meat-01.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
        "__v": 0
    },
    {
        "_id": "643d69a5c3f7b9001cfa093e",
        "name": "Филе Люминесцентного тетраодонтимформа",
        "type": "main",
        "proteins": 44,
        "fat": 26,
        "carbohydrates": 85,
        "calories": 643,
        "price": 988,
        "image": "https://code.s3.yandex.net/react/code/meat-03.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
        "__v": 0
    }
]

const initState = {
    apiRequest: false,
    apiFailed: false,
    array: []
}

describe('Тестирование редьюсера массива ингредиентов', () => {
    test('Загрузка данных', () => {
        expect(ingredsReducer(initState, getIngreds({ apiRequest: true }))).toEqual({
            apiRequest: true,
            apiFailed: false,
            array: []
        })
        expect(ingredsReducer(undefined, getIngreds({ apiRequest: true }))).toEqual({
            apiRequest: true,
            apiFailed: false,
            array: []
        })
    })
    test('Данные получены', () => {
        expect(ingredsReducer(initState, getIngredsSuccess(ingredientsArray))).toEqual({
            apiRequest: false,
            apiFailed: false,
            array: ingredientsArray
        })
        expect(ingredsReducer(undefined, getIngredsSuccess(ingredientsArray))).toEqual({
            apiRequest: false,
            apiFailed: false,
            array: ingredientsArray
        })
    })
    test('Ошибка запроса', () => {
        expect(ingredsReducer(initState, getIngredsFailed({ apiRequest: false, apiFailed: true }))).toEqual({
            apiRequest: false,
            apiFailed: true,
            array: []
        })
        expect(ingredsReducer(undefined, getIngredsFailed({ apiRequest: false, apiFailed: true }))).toEqual({
            apiRequest: false,
            apiFailed: true,
            array: []
        })
    })
})