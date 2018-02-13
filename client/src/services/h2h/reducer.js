// our packages
import {
  FETCH_DATA,
  FETCH_DATA_REJECTED,
  DATA_FETCHED,
  EXTRACT_WINNERS,
} from './actionTypes';
import h2hLeagueSchema from './h2hLeagueSchema.json';
import winnersSchema from './winnersSchema.json';
import Util from './util';

const initialState = {
  h2hLeagueSchema,
  winnersSchema,
  winners: [],
  data: {
    lastFetched: '',
    divisions: [],
    standings: [],
  },
};

const h2hStandings = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return state;
    case FETCH_DATA_REJECTED: {
      // TODO: Toast message
      console.log(action);
      return state;
    }
    case DATA_FETCHED:
      return {...state, data: Util.getH2HStandings(action.payload)};
    case EXTRACT_WINNERS:
      return {...state, winners: Util.getH2HWinners(action.payload)};
    default:
      return state;
  }
};

export default h2hStandings;
