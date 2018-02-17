// our packages
import {SET_ROUTE} from './actionTypes';

const initialState = {currentTab: ''};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTE:
      return {...state, currentTab: action.payload};
    default:
      return state;
  }
};

export default navigation;
