import { TAllOrdersMessage } from '../../utils/types/all-orders-types';
import { createAction } from '@reduxjs/toolkit';

export const connect = createAction<string, 'ALL_ORDERS_CONNECT'>('ALL_ORDERS_CONNECT');
export const disconnect = createAction('ALL_ORDERS_DISCONNECT');
export const wsConnecting = createAction('ALL_ORDERS_WS_CONNECTING');
export const wsOpen = createAction('ALL_ORDERS_WS_OPEN');
export const wsClose = createAction('ALL_ORDERS_WS_CLOSE');
export const wsMessage = createAction<TAllOrdersMessage, 'ALL_ORDERS_WS_MESSAGE'>('ALL_ORDERS_WS_MESSAGE');
export const wsError = createAction<string, 'ALL_ORDERS_WS_ERROR'>('ALL_ORDERS_WS_ERROR');

export type TAllOrdersActions = ReturnType<typeof connect>
    | ReturnType<typeof disconnect>
    | ReturnType<typeof wsConnecting>
    | ReturnType<typeof wsOpen>
    | ReturnType<typeof wsClose>
    | ReturnType<typeof wsMessage>
    | ReturnType<typeof wsError>;