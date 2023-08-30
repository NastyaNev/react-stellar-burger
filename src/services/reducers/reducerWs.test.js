
import { reducerWs } from "./reducerWs";
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

const initState = {
    status: WebsocketStatus.OFFLINE,
    connectionError: '',
    table: null
}

describe('Тестирование редьюсера вебсокета', () => {
    test('Создание соединения', () => {
        expect(reducerWs(initState, wsConnecting({ status: WebsocketStatus.CONNECTING }))).toEqual({
            status: WebsocketStatus.CONNECTING,
            connectionError: '',
            table: null
        })
        expect(reducerWs(undefined, wsConnecting({ status: WebsocketStatus.CONNECTING }))).toEqual({
            status: WebsocketStatus.CONNECTING,
            connectionError: '',
            table: null
        })
    })
    test('Успешное соединение', () => {
        expect(reducerWs(initState, wsOpen({ status: WebsocketStatus.ONLINE }))).toEqual({
            status: WebsocketStatus.ONLINE,
            connectionError: '',
            table: null
        })
        expect(reducerWs(undefined, wsOpen({ status: WebsocketStatus.ONLINE }))).toEqual({
            status: WebsocketStatus.ONLINE,
            connectionError: '',
            table: null
        })
    })
    test('Соединение закрыто', () => {
        expect(reducerWs(initState, wsClose())).toEqual({
            status: WebsocketStatus.OFFLINE,
            connectionError: '',
            table: null
        })
        expect(reducerWs(undefined, wsClose())).toEqual({
            status: WebsocketStatus.OFFLINE,
            connectionError: '',
            table: null
        })
    })
    test('Ошибка соединения', () => {
        expect(reducerWs(initState, wsError(error))).toEqual({
            status: WebsocketStatus.OFFLINE,
            connectionError: error,
            table: null
        })
        expect(reducerWs(undefined, wsError(error))).toEqual({
            status: WebsocketStatus.OFFLINE,
            connectionError: error,
            table: null
        })
    })
    test('Отправка сообщения на сервер', () => {
        expect(reducerWs({
            status: WebsocketStatus.ONLINE,
            connectionError: '',
            table: null
        }, wsMessage(ordersInfo))).toEqual({
            status: WebsocketStatus.ONLINE,
            connectionError: '',
            table: ordersInfo
        })
    })
})