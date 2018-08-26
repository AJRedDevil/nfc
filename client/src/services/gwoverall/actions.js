import {FETCH_DATA, DATA_FETCHED, SELECT_OPTION} from './actionTypes';

export const fetchGwOverallData = () => ({
  type: FETCH_DATA,
});

export const gwOverallDataFetched = data => ({
  type: DATA_FETCHED,
  payload: data,
});

export const selectOptions = data => ({
  type: SELECT_OPTION,
  payload: data,
});
