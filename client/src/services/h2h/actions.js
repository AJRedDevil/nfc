import {FETCH_DATA, DATA_FETCHED} from './actionTypes';

export const fetchH2HStandingsData = () => ({
  type: FETCH_DATA,
});

export const h2hStandingsDataFetched = data => ({
  type: DATA_FETCHED,
  payload: data,
});
