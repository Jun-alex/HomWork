import { all, call, put, takeEvery } from 'redux-saga/effects';
import { setLoading, setTodos } from "./slices/todosSlice.js";

const fetchTodosFromApi = () => new Promise((resolve) => {
    setTimeout(() => resolve([{ text: "Забрать машину", completed: false }]), 2000);
});

function* fetchTodos() {
    try {
        yield put(setLoading(true));
        const todos = yield call(fetchTodosFromApi);
        yield put(setTodos(todos));
    } catch (error) {
        console.error('Error fetching todos:', error);
        yield put(setLoading(false));
    }
}

export function* watchTodos() {
    yield takeEvery('todos/fetchTodos', fetchTodos);
}

export default function* rootSaga() {
    yield all([
        watchTodos(),
    ]);
}

