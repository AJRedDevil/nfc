import {SET_ROUTE, SET_DEFAULT_ROUTE} from './actionTypes';

export const setRoute = data => ({
  type: SET_ROUTE,
  payload: data,
});

export const setDefaultRoute = data => ({
  type: SET_DEFAULT_ROUTE,
  payload: data,
});
