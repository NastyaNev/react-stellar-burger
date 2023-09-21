
import { reducerWs, initialState } from "./reducerWs";
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from "../actions/actions-ws";
import { WebsocketStatus } from '../../utils/types/all-orders-types';

const ordersInfo = {
    success: true,
    orders: [
        {
            _id: "64ef936582e277001bfac417",
            ingredients: [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0945",
                "643d69a5c3f7b9001cfa0943"
            ],
            status: "done",
            name: "Space антарианский флюоресцентный бургер",
            createdAt: "2023-08-30T19:07:17.642Z",
            updatedAt: "2023-08-30T19:07:17.910Z",
            number: 18368
        },
        {
            _id: "64ef927182e277001bfac412",
            ingredients: [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0945",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            status: "done",
            name: "Space антарианский флюоресцентный бургер",
            createdAt: "2023-08-30T19:03:13.906Z",
            updatedAt: "2023-08-30T19:03:14.142Z",
            number: 18367
        }
    ],
    total: 17994,
    totalToday: 100
}

const error = "1006";

const connecting = {
    ...initialState,
    status: WebsocketStatus.CONNECTING
}

const connectSuccess = {
    ...initialState,
    status: WebsocketStatus.ONLINE
}

const connectError = {
    ...initialState,
    connectionError: error
}

describe('Тестирование редьюсера вебсокета', () => {
    test('Создание соединения', () => {
        expect(reducerWs(initialState, wsConnecting({ status: WebsocketStatus.CONNECTING }))).toEqual(connecting)
        expect(reducerWs(undefined, wsConnecting({ status: WebsocketStatus.CONNECTING }))).toEqual(connecting)
    })
    test('Успешное соединение', () => {
        expect(reducerWs(initialState, wsOpen({ status: WebsocketStatus.ONLINE }))).toEqual(connectSuccess)
        expect(reducerWs(undefined, wsOpen({ status: WebsocketStatus.ONLINE }))).toEqual(connectSuccess)
    })
    test('Соединение закрыто', () => {
        expect(reducerWs(initialState, wsClose())).toEqual(initialState)
        expect(reducerWs(undefined, wsClose())).toEqual(initialState)
    })
    test('Ошибка соединения', () => {
        expect(reducerWs(initialState, wsError(error))).toEqual(connectError)
        expect(reducerWs(undefined, wsError(error))).toEqual(connectError)
    })
    test('Отправка сообщения на сервер', () => {
        expect(reducerWs(connectSuccess, wsMessage(ordersInfo))).toEqual({
            ...connectSuccess,
            table: ordersInfo
        })
    })
})