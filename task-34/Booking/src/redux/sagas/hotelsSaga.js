import { call, put } from "redux-saga/effects";
import api from "../api/api.js";
import { setItems, setLoading } from "../slices/hotelsSlice";
import { push } from "redux-first-history";
import { route } from "../api/route.jsx";

export function* getHotelsWorker(action) {
  const { payload } = action;
  try {
    yield put(setLoading(true));
    const { data, status } = yield call(api.getHotels, payload);
    if (status === 200) {
      yield put(setItems(data));
      yield put(push(route.hotels.path));
    }
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setLoading(false));
  }
}
