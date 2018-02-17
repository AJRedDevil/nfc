// npm packages
import {isEmpty} from 'lodash';

// our packages
import {
  FETCH_DATA,
  FETCH_DATA_REJECTED,
  DATA_FETCHED,
  EXTRACT_WINNERS,
  SET_ROUTE,
  SET_LINKS,
  SET_DEFAULT_ROUTE,
} from './actionTypes';
import h2hLeagueSchema from './h2hLeagueSchema.json';
import winnersSchema from './winnersSchema.json';
import Util from './util';
import {Logger} from '../../utils';

const initialState = {
  h2hLeagueSchema,
  winnersSchema,
  links: [],
  winners: [],
  data: {
    lastFetched: '',
    leagueNames: [],
    standings: [],
  },
  currentTab: '',
};

const BASE = 'h2hStandings.reducer';

function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues);
}

const handleRejectedData = (state, action) => {
  // TODO: Toast message
  Logger.info(action, BASE);
  return state;
};

const setRoute = (state, action) => {
  const newCurrentTab = action.payload;
  return updateObject(state, {currentTab: newCurrentTab});
};

const setLinks = state => {
  const newLinks = Util.getLinks(state.data.leagueNames);
  return updateObject(state, {links: newLinks});
};

const setDefaultRoute = state => {
  Logger.info('setDefaultRoute', BASE);
  const defaultTab = isEmpty(state.currentTab)
    ? state.links[0].path
    : state.currentTab;
  return updateObject(state, {currentTab: defaultTab});
};

const h2hStandings = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return state;
    case FETCH_DATA_REJECTED:
      return handleRejectedData(state, action);
    case DATA_FETCHED:
      return {...state, data: Util.getH2HStandings(action.payload)};
    case EXTRACT_WINNERS:
      return {...state, winners: Util.getH2HWinners(action.payload)};
    case SET_LINKS:
      return setLinks(state);
    case SET_DEFAULT_ROUTE:
      return setDefaultRoute(state);
    case SET_ROUTE:
      return setRoute(state, action);
    default:
      return state;
  }
};

export default h2hStandings;
