import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createReduxHistoryContext } from "redux-first-history";
import destinationReducer from "./slices/destinationSlice";
import hotelsReducer from "./slices/hotelsSlice";
import rootSaga from "./sagas/indexSagas.js";
import { createBrowserHistory } from "history";
import formReducer from "./slices/formSlice.js";

const { routerReducer, routerMiddleware, createReduxHistory } = createReduxHistoryContext({
  history: createBrowserHistory()
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    router: routerReducer,
    destination: destinationReducer,
    hotels: hotelsReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
    routerMiddleware
  ]
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
