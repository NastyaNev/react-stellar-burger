import { setOrder } from "../../components/api/api";

export const GET_MOOVED_ITEMS = 'GET_MOOVED_ITEMS';
export const DELETE_CONST_ITEM = 'DELETE_CONST_ITEM';

export const GET_ORDER_NUM = 'GET_ORDER_NUM';
export const GET_ORDER_NUM_FAILED = 'GET_ORDER_NUM_FAILED';
export const GET_ORDER_NUM_SUCCESS = 'GET_ORDER_NUM_SUCCESS';

export const REORDER_INGREDS = 'REORDER_INGREDS';

export function getAnswer(ingredients) {
    return function(dispatch) {
      dispatch({
        type: GET_ORDER_NUM
      });
      return setOrder(ingredients).then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_NUM_SUCCESS,
            answer: res
          });
        } else {
          dispatch({
            type: GET_ORDER_NUM_FAILED
          });
        }
      });
    };
  }