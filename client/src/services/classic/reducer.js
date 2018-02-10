import {FETCH_DATA, FETCH_DATA_REJECTED, DATA_FETCHED} from './actionTypes';

const intialState = {
  title: 'NFC Classic',
  subtitle: 'Top 3',
  data: {},
};

const classicStandings = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return state;
    case FETCH_DATA_REJECTED: {
      // TODO: Toast message
      console.log(action);
      return state;
    }
    case DATA_FETCHED:
      return {...state, data: action.payload};
    default:
      return state;
  }
};

export default classicStandings;
