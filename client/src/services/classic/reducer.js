// our packages
import {
  FETCH_DATA,
  FETCH_DATA_REJECTED,
  DATA_FETCHED,
  EXTRACT_WINNERS,
} from './actionTypes';
import classicLeagueSchema from './classicLeagueSchema.json';
import top3Schema from './top3Schema.json';
import Util from './util';

const initialState = {
  classicLeagueSchema,
  top3Schema,
  data: {
    leagueName: '',
    creationDate: '',
    lastFetched: '',
    standings: [],
  },
};

const classicStandings = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return state;
    case FETCH_DATA_REJECTED: {
      // TODO: Toast message
      console.log(action);
      return state;
    }
    case DATA_FETCHED:
      return {...state, data: Util.getStandings(action.payload)};
    case EXTRACT_WINNERS:
      return {...state, top3: Util.getClassicWinners(action.payload)};
    default:
      return state;
  }
};

export default classicStandings;
