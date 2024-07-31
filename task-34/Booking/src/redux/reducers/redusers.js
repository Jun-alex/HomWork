import { combineReducers } from "redux";
import {
  FETCH_HOTELS_FAILURE,
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  SET_DESTINATIONS,
  SUBMIT_DESTINATION_SUCCESS,
  SUBMIT_DESTINATION_FAILURE
} from "../actions/actions";
import formReducer from "../slices/formSlice.js";

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

const destinationReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DESTINATIONS:
      return action.payload;
    default:
      return state;
  }
};

const submitStatusReducer = (state = null, action) => {
  switch (action.type) {
    case SUBMIT_DESTINATION_SUCCESS:
      return "success";
    case SUBMIT_DESTINATION_FAILURE:
      return "failure";
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  loading: loadingReducer,
  destination: destinationReducer,
  submitStatus: submitStatusReducer,
  form: formReducer,
});

export default rootReducer;
