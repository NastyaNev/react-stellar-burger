import { TOrder } from "./types";

export enum WebsocketStatus {
    CONNECTING = 'CONNECTING...',
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE'
}

export interface OrdersRow {
    success: boolean,
    orders: TOrder[],
    total: number,
    totalToday: number,
}

export type AllOrders = Array<OrdersRow>;

export enum AllOrdersActionType {
    DATA = 'data',
    INSERT = 'insert',
    DELETE = 'delete',
    UPDATE = 'update',
    MOVE = 'move',
}

export type Data = {
    type: AllOrdersActionType.DATA,
    data: AllOrders
}

export type Insert = {
    type: AllOrdersActionType.INSERT,
    data: {
        rows: Array<OrdersRow>,
        pos: number
    }
}

export type Update = {
    type: AllOrdersActionType.UPDATE,
    data: AllOrders
}

export type Delete = {
    type: AllOrdersActionType.DELETE,
    data: Array<number>
}

export type Move = {
    type: AllOrdersActionType.MOVE,
    data: Array<{ from: number, to: number }>
}

export type TAllOrdersMessage = OrdersRow;

export type AllOrdersActions = Array<TAllOrdersMessage>;