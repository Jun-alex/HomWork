import { combineReducers } from 'redux';
import {
  FETCH_HOTELS_FAILURE,
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
} from "../actions/actions.js";

const hotelsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_HOTELS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case FETCH_HOTELS_REQUEST:
      return true;
    case FETCH_HOTELS_SUCCESS:
    case FETCH_HOTELS_FAILURE:
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  loading: loadingReducer
});

export default rootReducer;
