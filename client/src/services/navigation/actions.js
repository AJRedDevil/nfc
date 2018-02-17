import {SET_ROUTE} from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const setRoute = nextRoute => ({
  type: SET_ROUTE,
  payload: nextRoute,
});
