import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todosReducer from "./todosStore.js";
import rootSaga from "./todosSaga.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

