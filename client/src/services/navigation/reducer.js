// our packages
import {SET_ROUTE, SET_DEFAULT_ROUTE} from './actionTypes';

const initialState = {currentTab: ''};

const setDefaultRoute = (state, action) => {
  const defaultTab = action.payload.split('/')[1];
  return {...state, currentTab: defaultTab};
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_ROUTE:
      return setDefaultRoute(state, action);
    case SET_ROUTE:
      return {...state, currentTab: action.payload};
    default:
      return state;
  }
};

export default navigation;
