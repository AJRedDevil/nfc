import {FETCH_DATA, DATA_FETCHED, EXTRACT_WINNERS} from './actionTypes';

export const fetchH2HStandingsData = () => ({
  type: FETCH_DATA,
});

export const h2hStandingsDataFetched = data => ({
  type: DATA_FETCHED,
  payload: data,
});

export const extractH2HWinners = data => ({
  type: EXTRACT_WINNERS,
  payload: data,
});
