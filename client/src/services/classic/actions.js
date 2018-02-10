import {FETCH_DATA, DATA_FETCHED} from './actionTypes';

export const fetchClassicData = () => ({
  type: FETCH_DATA,
});

export const classicDataFetched = data => ({
  type: DATA_FETCHED,
  payload: data,
});
