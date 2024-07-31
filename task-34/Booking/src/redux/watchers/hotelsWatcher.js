import { takeEvery } from "redux-saga/effects";
import { FETCH_HOTELS_REQUEST } from "../actions/actions";
import { getHotelsWorker } from "../sagas/hotelsSaga";

export function* hotelsWatcher() {
  yield takeEvery(FETCH_HOTELS_REQUEST, getHotelsWorker);
}
