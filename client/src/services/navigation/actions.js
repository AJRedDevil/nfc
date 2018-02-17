import {SET_ROUTE, SET_DEFAULT_ROUTE} from './actionTypes';

export const setRoute = nextRoute => ({
  type: SET_ROUTE,
  payload: nextRoute,
});

export const setDefaultRoute = data => ({
  type: SET_DEFAULT_ROUTE,
  payload: data,
});
