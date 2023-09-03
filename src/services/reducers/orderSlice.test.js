import orderReducer from './orderSlice';
import { getOrderNum, getOrderNumSuccess, getOrderNumFailed, initialState } from './orderSlice';

const orderInfo =
{
    name: "Space флюоресцентный бургер",
    order: {
        number: 18356
    }
}

const loading = {
    ...initialState,
    apiRequest: true,
}

const loadingSuccess = {
    ...initialState,
    answer: orderInfo
}

const error = {
    ...initialState,
    apiFailed: true
}

describe('Тестирование редьюсера информации о сделанном заказе', () => {
    test('Загрузка данных', () => {
        expect(orderReducer(initialState, getOrderNum({ apiRequest: true }))).toEqual(loading)
        expect(orderReducer(undefined, getOrderNum({ apiRequest: true }))).toEqual(loading)
    })
    test('Данные получены', () => {
        expect(orderReducer(initialState, getOrderNumSuccess(orderInfo))).toEqual(loadingSuccess)
        expect(orderReducer(undefined, getOrderNumSuccess(orderInfo))).toEqual(loadingSuccess)
    })
    test('Ошибка запроса', () => {
        expect(orderReducer(initialState, getOrderNumFailed({ apiRequest: false, apiFailed: true }))).toEqual(error)
        expect(orderReducer(undefined, getOrderNumFailed({ apiRequest: false, apiFailed: true }))).toEqual(error)
    })
})