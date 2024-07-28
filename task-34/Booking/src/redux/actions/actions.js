import axios from 'axios';

export const FETCH_HOTELS_REQUEST = 'FETCH_HOTELS_REQUEST';
export const FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS';
export const FETCH_HOTELS_FAILURE = 'FETCH_HOTELS_FAILURE';
export const FETCH_DESTINATIONS = 'FETCH_DESTINATIONS';
export const SET_DESTINATIONS = 'SET_DESTINATIONS';
export const SUBMIT_DESTINATION = 'SUBMIT_DESTINATION';
export const SUBMIT_DESTINATION_SUCCESS = 'SUBMIT_DESTINATION_SUCCESS';
export const SUBMIT_DESTINATION_FAILURE = 'SUBMIT_DESTINATION_FAILURE';

export const fetchHotelsRequest = () => ({
  type: FETCH_HOTELS_REQUEST
});

export const fetchHotelsSuccess = (hotels) => ({
  type: FETCH_HOTELS_SUCCESS,
  payload: hotels
});

export const fetchHotelsFailure = (error) => ({
  type: FETCH_HOTELS_FAILURE,
  payload: error
});

export const fetchDestinations = () => ({
  type: FETCH_DESTINATIONS
});

export const setDestinations = (destinations) => ({
  type: SET_DESTINATIONS,
  payload: destinations
});

export const submitDestination = (values) => ({
  type: SUBMIT_DESTINATION,
  payload: values
});

export const submitDestinationSuccess = () => ({
  type: SUBMIT_DESTINATION_SUCCESS
});

export const submitDestinationFailure = (error) => ({
  type: SUBMIT_DESTINATION_FAILURE,
  payload: error
});
