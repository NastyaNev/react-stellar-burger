import { getArray } from "../components/api/api";
import { getIngreds, getIngredsFailed, getIngredsSuccess } from "./reducers/ingredientsSlice";

export function getItems() {
    return function (dispatch) {
        dispatch(getIngreds());
        return getArray().then(res => {
            if (res && res.success) {
                console.log('res.data', res.data);
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

// export function getAnswer(ingredients) {
//     return function (dispatch) {
//         dispatch({
//             type: GET_ORDER_NUM
//         });
//         return setOrder(ingredients).then(res => {
//             if (res && res.success) {
//                 dispatch({
//                     type: GET_ORDER_NUM_SUCCESS,
//                     answer: res
//                 });
//             } else {
//                 dispatch({
//                     type: GET_ORDER_NUM_FAILED
//                 });
//             }
//         })
//             .catch(err => {
//                 console.log(err)
//             });
//     };
// }