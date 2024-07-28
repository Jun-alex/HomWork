import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTELS_FAILURE,
  FETCH_DESTINATIONS,
  SET_DESTINATIONS
} from '../actions/actions.js';

function* fetchDestinations() {
  try {
    const response = yield call(axios.get, 'http://localhost:3000/destinations');
    yield put({ type: SET_DESTINATIONS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
}

function* fetchHotelsSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:3000/hotels');
    yield put({ type: FETCH_HOTELS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_HOTELS_FAILURE, payload: error.message });
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_HOTELS_REQUEST, fetchHotelsSaga);
  yield takeLatest(FETCH_DESTINATIONS, fetchDestinations);
}
