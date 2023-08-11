import { getUser, setUser } from "../../components/api/api";

export const SET_USER = 'SET_USER';
export const SET_AUTH_CHECKED = 'SET_AUTH_CHECKED';

export function login(email, password) {
    return function (dispatch) {
        return setUser(email, password).then(res => {
            if (res && res.success) {
                localStorage.setItem("accessToken", res.accessToken);
                localStorage.setItem("refreshToken", res.refreshToken);
                dispatch({
                    type: SET_USER,
                    user: res.user
                });
            } else {
                return Promise.reject("Ошибка данных с сервера");
            }
        })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                dispatch({
                    type: SET_AUTH_CHECKED,
                    isAuthChecked: true
                });
            });
    };
}

export const checkUserAuth = () => {
    return (dispatch) => {
        if (localStorage.getItem("accessToken")) {
            dispatch(getUser())
                .catch((error) => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch({type: SET_USER,
                    user: null});
                })
                .finally(() => dispatch({type: SET_AUTH_CHECKED, isAuthChecked: true}));
        } else {
            dispatch({type: SET_AUTH_CHECKED, isAuthChecked: true});
            dispatch({type: SET_USER, user: null});
        }
    };
};
