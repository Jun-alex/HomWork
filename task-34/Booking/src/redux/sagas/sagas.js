import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTELS_FAILURE,
  FETCH_DESTINATIONS,
  SET_DESTINATIONS,
  SUBMIT_DESTINATION,
  SUBMIT_DESTINATION_SUCCESS,
  SUBMIT_DESTINATION_FAILURE
} from '../actions/actions.js';

function* fetchDestinations() {
  try {
    const response = yield call(axios.get, 'http://localhost:3000/destination');
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

function* submitDestinationSaga(action) {
  try {
    yield call(axios.post, 'http://localhost:3000/hotels', action.payload);
    yield put({ type: SUBMIT_DESTINATION_SUCCESS });
    yield put({ type: FETCH_HOTELS_REQUEST });
  } catch (error) {
    yield put({ type: SUBMIT_DESTINATION_FAILURE, payload: error.message });
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_HOTELS_REQUEST, fetchHotelsSaga);
  yield takeLatest(FETCH_DESTINATIONS, fetchDestinations);
  yield takeLatest(SUBMIT_DESTINATION, submitDestinationSaga);
}
