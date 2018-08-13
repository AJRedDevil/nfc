// our packages
import {
  FETCH_DATA,
  FETCH_DATA_REJECTED,
  DATA_FETCHED,
  EXTRACT_WINNERS,
} from './actionTypes';
import classicLeagueSchema from './classicLeagueSchema.json';
import top5Schema from './top5Schema.json';
import Util from './util';
import {Logger} from '../../utils';

const initialState = {
  classicLeagueSchema,
  top5Schema,
  data: {
    leagueName: '',
    creationDate: '',
    lastFetched: '',
    standings: [],
  },
};

const classicStandings = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REJECTED: {
      // TODO: Toast message
      Logger.info(action, 'classicStandings.reducer');
      return state;
    }
    case DATA_FETCHED:
      return {...state, data: Util.getStandings(action.payload)};
    case EXTRACT_WINNERS:
      return {...state, top5: Util.getClassicWinners(action.payload)};
    case FETCH_DATA:
    default:
      return state;
  }
};

export default classicStandings;
