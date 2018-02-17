import {
  FETCH_DATA,
  DATA_FETCHED,
  EXTRACT_WINNERS,
  SET_LINKS,
  SET_DEFAULT_ROUTE,
  SET_ROUTE,
} from './actionTypes';

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

export const setRoute = nextTab => ({
  type: SET_ROUTE,
  payload: nextTab,
});

export const setLinks = data => ({
  type: SET_LINKS,
  payload: data,
});

export const setDefaultRoute = () => ({
  type: SET_DEFAULT_ROUTE,
});
