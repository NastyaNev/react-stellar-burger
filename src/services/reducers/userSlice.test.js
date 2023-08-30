import { setVisitor, setAuthChecked } from './userSlice';
import userReducer from './userSlice';

const userInfo = {
    email: "asrozova@gmail.com",
    name: "Nastya"
}

describe('Тестирование редьюсера информации о пользователе', () => {
    test('Добавление информации о пользователе', () => {
        expect(userReducer(undefined, setVisitor(userInfo))).toEqual({ user: userInfo, isAuthChecked: false })
        expect(userReducer({ user: null }, setVisitor(userInfo))).toEqual({ user: userInfo })
    })
    test('Проверка авторизации', () => {
        expect(userReducer(undefined, setAuthChecked(true))).toEqual({ isAuthChecked: true, user: null })
        expect(userReducer({ isAuthChecked: false }, setAuthChecked(true))).toEqual({ isAuthChecked: true })
    })
})