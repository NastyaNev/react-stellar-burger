import orderReducer from './orderSlice';
import { getOrderNum, getOrderNumSuccess, getOrderNumFailed } from './orderSlice';

const orderInfo =
{
    name: "Space флюоресцентный бургер",
    order: {
        number: 18356
    }
}

const initState = {
    apiRequest: false,
    apiFailed: false,
    answer: null
}

describe('Тестирование редьюсера информации о сделанном заказе', () => {
    test('Загрузка данных', () => {
        expect(orderReducer(initState, getOrderNum({ apiRequest: true }))).toEqual({
            apiRequest: true,
            apiFailed: false,
            answer: null
        })
        expect(orderReducer(undefined, getOrderNum({ apiRequest: true }))).toEqual({
            apiRequest: true,
            apiFailed: false,
            answer: null
        })
    })
    test('Данные получены', () => {
        expect(orderReducer(initState, getOrderNumSuccess(orderInfo))).toEqual({
            apiRequest: false,
            apiFailed: false,
            answer: orderInfo
        })
        expect(orderReducer(undefined, getOrderNumSuccess(orderInfo))).toEqual({
            apiRequest: false,
            apiFailed: false,
            answer: orderInfo
        })
    })
    test('Ошибка запроса', () => {
        expect(orderReducer(initState, getOrderNumFailed({ apiRequest: false, apiFailed: true }))).toEqual({
            apiRequest: false,
            apiFailed: true,
            answer: null
        })
        expect(orderReducer(undefined, getOrderNumFailed({ apiRequest: false, apiFailed: true }))).toEqual({
            apiRequest: false,
            apiFailed: true,
            answer: null
        })
    })
})