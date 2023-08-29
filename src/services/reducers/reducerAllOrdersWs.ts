import { WebsocketStatus, TAllOrdersMessage, OrdersRow } from '../../utils/types/all-orders-types';
import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from "../actions/actions-ws";
  
export type AllOrdersStore = {
    status: WebsocketStatus,
    connectionError: string,
    table: OrdersRow | null
}

const initialState: AllOrdersStore = {
    status: WebsocketStatus.OFFLINE,
    connectionError: '',
    table: null
};

export const reducerWs = createReducer(initialState, (builder) => {
    builder
      .addCase(wsConnecting, (state) => {
          state.status = WebsocketStatus.CONNECTING;
      })
      .addCase(wsOpen, (state) => {
          state.status = WebsocketStatus.ONLINE;
          state.connectionError = '';
      })
      .addCase(wsClose, (state) => {
        state.status = WebsocketStatus.OFFLINE;
      })
      .addCase(wsError, (state, action) => {
        state.connectionError = action.payload;
      })
      .addCase(wsMessage, (state, action: PayloadAction<TAllOrdersMessage>) => {
        state.table = action.payload;
      })
  })