import { call, put } from "redux-saga/effects";
import api from "../api/api.js";
import { setItems, setLoading } from "../slices/destinationSlice";

export function* getDestinationWorker() {
  try {
    yield put(setLoading(true));
    const { data, status } = yield call(api.getDestination);
    if (status === 200) {
      yield put(setItems(data));
    }
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setLoading(false));
  }
}
