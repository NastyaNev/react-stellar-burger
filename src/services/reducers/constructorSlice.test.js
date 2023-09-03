import constReducer from './constructorSlice';
import { getMoovedItems, sortIngreds, delConstItem, initialState } from './constructorSlice';

const bunDitails = {
    _id: "643d69a5c3f7b9001cfa093d",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
    id: "aeaef4d1-6c57-4e77-9c12-cdbf7163de0c"
};

const middle = {
    _id: "643d69a5c3f7b9001cfa0943",
    name: "Соус фирменный Space Sauce",
    type: "sauce",
    proteins: 50,
    fat: 22,
    carbohydrates: 11,
    calories: 14,
    price: 80,
    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
    __v: 0,
    id: "42781437-ccc3-46c0-8991-362f00cadd12"
};

const middleList = [
    {
        _id: "643d69a5c3f7b9001cfa0945",
        name: "Соус с шипами Антарианского плоскоходца",
        type: "sauce",
        proteins: 101,
        fat: 99,
        carbohydrates: 100,
        calories: 100,
        price: 88,
        image: "https://code.s3.yandex.net/react/code/sauce-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
        __v: 0,
        id: "36a5d994-b9f7-4ada-9c34-3b6184fb8e19"
    }
];

const middleDel = {
    _id: "643d69a5c3f7b9001cfa0945",
    name: "Соус с шипами Антарианского плоскоходца",
    type: "sauce",
    proteins: 101,
    fat: 99,
    carbohydrates: 100,
    calories: 100,
    price: 88,
    image: "https://code.s3.yandex.net/react/code/sauce-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
    __v: 0,
    id: "36a5d994-b9f7-4ada-9c34-3b6184fb8e19"
};

const middleForSort = [
    {
        _id: "643d69a5c3f7b9001cfa0945",
        name: "Соус с шипами Антарианского плоскоходца",
        type: "sauce",
        proteins: 101,
        fat: 99,
        carbohydrates: 100,
        calories: 100,
        price: 88,
        image: "https://code.s3.yandex.net/react/code/sauce-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
        __v: 0,
        id: "36a5d994-b9f7-4ada-9c34-3b6184fb8e19"
    },
    {
        _id: "643d69a5c3f7b9001cfa0949",
        name: "Мини-салат Экзо-Плантаго",
        type: "main",
        proteins: 1,
        fat: 2,
        carbohydrates: 3,
        calories: 6,
        price: 4400,
        image: "https://code.s3.yandex.net/react/code/salad.png",
        image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
        __v: 0,
        id: "34303c0f-e35b-4d4b-8e2d-8e613b870b27"
    }
];

const middleSorted = [
    {
        _id: "643d69a5c3f7b9001cfa0949",
        name: "Мини-салат Экзо-Плантаго",
        type: "main",
        proteins: 1,
        fat: 2,
        carbohydrates: 3,
        calories: 6,
        price: 4400,
        image: "https://code.s3.yandex.net/react/code/salad.png",
        image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
        __v: 0,
        id: "34303c0f-e35b-4d4b-8e2d-8e613b870b27"
    },
    {
        _id: "643d69a5c3f7b9001cfa0945",
        name: "Соус с шипами Антарианского плоскоходца",
        type: "sauce",
        proteins: 101,
        fat: 99,
        carbohydrates: 100,
        calories: 100,
        price: 88,
        image: "https://code.s3.yandex.net/react/code/sauce-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
        __v: 0,
        id: "36a5d994-b9f7-4ada-9c34-3b6184fb8e19"
    }
];

const haveOnlyBun = {
    bun: bunDitails,
    mooved: []
}

describe('Тестирование редьюсера конструктора бургера', () => {
    test('Проверка на булку', () => {
        expect(constReducer(initialState, getMoovedItems(bunDitails))).toEqual(haveOnlyBun)
        expect(constReducer(undefined, getMoovedItems(bunDitails))).toEqual(haveOnlyBun)
    })
    test('Проверка на соус и начинку', () => {
        expect(constReducer({
            ...initialState,
            mooved: middleList
        }, getMoovedItems(middle))).toEqual({
            ...initialState,
            mooved: [...middleList, middle]
        })
    })
    test('Сортировка ингредиентов', () => {
        expect(constReducer({
            ...initialState,
            mooved: middleForSort
        }, sortIngreds({ itemId: "34303c0f-e35b-4d4b-8e2d-8e613b870b27", targetItemId: '36a5d994-b9f7-4ada-9c34-3b6184fb8e19' }))).toEqual({
            ...initialState,
            mooved: middleSorted
        })
    })
    test('Удаление ингредиента из списка', () => {
        expect(constReducer({
            ...initialState,
            mooved: middleList
        }, delConstItem(middleDel))).toEqual(initialState)
    })
})