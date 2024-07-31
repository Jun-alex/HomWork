import { all } from "redux-saga/effects";
import { hotelsWatcher } from "../watchers/hotelsWatcher.js";
import { destinationWatcher } from "../watchers/destinationWatcher.js";


export default function* rootSaga() {
  yield all([
    hotelsWatcher(),
    destinationWatcher(),
  ]);
}
