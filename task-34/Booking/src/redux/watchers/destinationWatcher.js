import { takeEvery } from "redux-saga/effects";
import { FETCH_DESTINATIONS } from "../actions/actions";
import { getDestinationWorker } from "../sagas/destinationSaga";

export function* destinationWatcher() {
  yield takeEvery(FETCH_DESTINATIONS, getDestinationWorker);
}
