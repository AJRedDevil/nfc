import {FETCH_DATA, DATA_FETCHED, EXTRACT_WINNERS} from './actionTypes';

export const fetchClassicData = () => ({
  type: FETCH_DATA,
});

export const classicDataFetched = data => ({
  type: DATA_FETCHED,
  payload: data,
});

export const extractClassicWinners = data => ({
  type: EXTRACT_WINNERS,
  payload: data,
});
