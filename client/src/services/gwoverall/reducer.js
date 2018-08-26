// our packages
import {
  FETCH_DATA,
  FETCH_DATA_REJECTED,
  DATA_FETCHED,
  SELECT_OPTION,
} from './actionTypes';
import gwOverallSchema from './gwOverallSchema.json';
import Util from './util';
import {Logger} from '../../utils';

const initialState = {
  gwOverallSchema,
  data: {
    leagueName: 'NFC',
    gameweek: -1,
    lastFetched: '',
    standings: [],
  },
  selectedOptions: [],
};

const gwOverallStandings = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REJECTED: {
      // TODO: Toast message
      Logger.info(action, 'gwOverallStandings.reducer');
      return state;
    }
    case DATA_FETCHED:
      return {
        ...state,
        data: {
          ...state.data,
          ...Util.getOverallStandings(action.payload),
        },
      };
    case SELECT_OPTION:
      return {
        ...state,
        selectedOptions: action.payload,
      };
    case FETCH_DATA:
    default:
      return state;
  }
};

export default gwOverallStandings;
