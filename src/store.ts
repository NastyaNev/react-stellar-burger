import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ingredReducer from './services/reducers/ingredientSlice';
import ingredsReducer from './services/reducers/ingredientsSlice';
import constReducer from './services/reducers/constructorSlice';
import userReducer from './services/reducers/userSlice';
import orderReducer from './services/reducers/orderSlice';
import feedIdReducer from "./services/reducers/feedIdSlice";
import { socketMiddleware } from "./services/middleware/socket-middleware";
import { reducerWs } from './services/reducers/reducerAllOrdersWs';
import { 
  connect as AllOrdersWsConnect, 
  disconnect as AllOrdersWsDisconnect,
  wsConnecting as AllOrdersWsConnecting,
  wsOpen as AllOrdersWsOpen,
  wsClose as AllOrdersWsClose,
  wsMessage as AllOrdersWsNessage,
  wsError as AllOrdersWsError 
} from "./services/actions/actions-ws";

const wsActions = {
  wsConnect: AllOrdersWsConnect,
  wsDisconnect: AllOrdersWsDisconnect,
  wsConnecting: AllOrdersWsConnecting,
  onOpen: AllOrdersWsOpen,
  onClose: AllOrdersWsClose,
  onError: AllOrdersWsError,
  onMessage: AllOrdersWsNessage,
};

const WsMiddleware = socketMiddleware(wsActions);

export const rootReducer = combineReducers({
  ingredient: ingredReducer,
  ingredients: ingredsReducer,
  constructorBurger: constReducer,
  user: userReducer,
  order: orderReducer,
  orders: reducerWs,
  feedOrder: feedIdReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(WsMiddleware)
  }
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;