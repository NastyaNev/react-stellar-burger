import { getArray, getUser, setUser } from "../../components/api/api";
import { getIngreds, getIngredsFailed, getIngredsSuccess } from "../reducers/ingredientsSlice";
import { getOrderNum, getOrderNumFailed, getOrderNumSuccess } from "../reducers/orderSlice";
import { setAuthChecked, setVisitor } from "../reducers/userSlice";
import { setOrder } from '../../components/api/api'

export function getItems() {
    return function (dispatch) {
        dispatch(getIngreds());
        return getArray().then(res => {
            if (res && res.success) {
                dispatch(getIngredsSuccess(res.data));
            } else {
                dispatch(getIngredsFailed());
            }
        })
            .catch(err => {
                console.log(err)
            });
    };
}

export function login(email, password, user, isAuthChecked) {
    return function (dispatch) {
        return setUser(email, password).then(res => {
            if (res && res.success) {
                localStorage.setItem("accessToken", res.accessToken);
                localStorage.setItem("refreshToken", res.refreshToken);
                dispatch(setVisitor(user = res.user));
            } else {
                return Promise.reject("Ошибка данных с сервера");
            }
        })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                dispatch(setAuthChecked(isAuthChecked = true));
            });
    };
}

export const checkUserAuth = (user, isAuthChecked) => {
    return (dispatch) => {
        if (localStorage.getItem("accessToken")) {
            dispatch(getUser())
                .catch((error) => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch(setVisitor(user = null));
                })
                .finally(() => dispatch(setAuthChecked(isAuthChecked = true)))
        } else {
            dispatch(setAuthChecked(isAuthChecked = true));
            dispatch(setVisitor(user = null));
        }
    };
};

export function getAnswer(ingredients, answer) {
    return function (dispatch) {
        dispatch(getOrderNum());
        return setOrder(ingredients).then(res => {
            if (res && res.success) {
                dispatch(getOrderNumSuccess(answer = res));
            } else {
                dispatch(getOrderNumFailed());
            }
        })
            .catch(err => {
                console.log(err)
            });
    };
}