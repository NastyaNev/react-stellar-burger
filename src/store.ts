import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ingredReducer from './services/reducers/ingredientSlice';
import ingredsReducer from './services/reducers/ingredientsSlice';
import constReducer from './services/reducers/constructorSlice';
import userReducer from './services/reducers/userSlice';
import orderReducer from './services/reducers/orderSlice';
import { socketMiddleware } from "./services/middleware/socket-middleware";
import { reducerWs } from './services/reducers/reducerAllOrdersWs';
import { 
  connect as LiveTableWsConnect, 
  disconnect as LiveTableWsDisconnect,
  wsConnecting as LiveTableWsConnecting,
  wsOpen as LiveTableWsOpen,
  wsClose as LiveTableWsClose,
  wsMessage as LiveTableWsNessage,
  wsError as LiveTableWsError 
} from "./services/actions/actions-ws";

const wsActions = {
  wsConnect: LiveTableWsConnect,
  wsDisconnect: LiveTableWsDisconnect,
  wsConnecting: LiveTableWsConnecting,
  onOpen: LiveTableWsOpen,
  onClose: LiveTableWsClose,
  onError: LiveTableWsError,
  onMessage: LiveTableWsNessage,
};

const WsMiddleware = socketMiddleware(wsActions);

export const rootReducer = combineReducers({
  ingredient: ingredReducer,
  ingredients: ingredsReducer,
  constructorBurger: constReducer,
  user: userReducer,
  order: orderReducer,
  orders: reducerWs
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(WsMiddleware)
  }
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;