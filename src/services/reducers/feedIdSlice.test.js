import { getFeedOrder, delFeedOrder } from './feedIdSlice';
import feedIdReducer from './feedIdSlice';

const feedIdInfo = {
    _id: "64ef3d8182e277001bfac296",
    ingredients: ["643d69a5c3f7b9001cfa0942",
        "643d69a5c3f7b9001cfa093c"],
    status: "done",
    name: "Краторный spicy бургер",
    createdAt: "2023-08-30T13:00:49.660Z",
    updatedAt: "2023-08-30T13:00:49.865Z",
    number: 18301
}

describe('Тестирование редьюсера модалки с информацией о заказе', () => {
    test('Добавление информации', () => {
        expect(feedIdReducer(undefined, getFeedOrder(feedIdInfo))).toEqual({ feedOrder: feedIdInfo })
        expect(feedIdReducer({ feedOrder: null }, getFeedOrder(feedIdInfo))).toEqual({ feedOrder: feedIdInfo })
    })
    test('Удаление информации', () => {
        expect(feedIdReducer(undefined, delFeedOrder(null))).toEqual({ feedOrder: null })
        expect(feedIdReducer({ feedOrder: feedIdInfo }, delFeedOrder(null))).toEqual({ feedOrder: null })
    })
})