import { getArray } from "../../components/api/api";

export const GET_ARRAY = 'GET_ARRAY';
export const GET_ARRAY_FAILED = 'GET_ARRAY_FAILED';
export const GET_ARRAY_SUCCESS = 'GET_ARRAY_SUCCESS';

export const DELETE_MOOVED_ITEM = 'DELETE_MOOVED_ITEM';
export const ADD_MOOVED_ITEM = 'ADD_MOOVED_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function getItems() {
  return function(dispatch) {
    dispatch({
      type: GET_ARRAY
    });
    getArray().then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_ARRAY_SUCCESS,
          array: res.data
        });
      } else {
        dispatch({
          type: GET_ARRAY_FAILED
        });
      }
    });
  };
}
