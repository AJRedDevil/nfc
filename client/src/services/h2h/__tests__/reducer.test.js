// our packages
import H2HReducer from '../reducer';
import {
  FETCH_DATA,
  FETCH_DATA_REJECTED,
  DATA_FETCHED,
  EXTRACT_WINNERS,
  SET_LINKS,
  SET_DEFAULT_ROUTE,
  SET_ROUTE,
} from '../actionTypes';
import h2hLeagueSchema from '../h2hLeagueSchema.json';
import winnersSchema from '../winnersSchema.json';
import H2HData from './h2hData.json';

const INITIAL_STATE = {
  h2hLeagueSchema,
  winnersSchema,
  links: [],
  winners: [],
  data: {
    lastFetched: '',
    allIds: [],
    leagueNames: {},
    standings: {},
  },
  currentTab: '',
};

describe('H2H Reducer', () => {
  test('default', () => {
    const action = {type: null};
    const response = H2HReducer(INITIAL_STATE, action);
    expect(response).toEqual(INITIAL_STATE);
  });

  test('Fetch Data', () => {
    const action = {type: FETCH_DATA};
    const response = H2HReducer(INITIAL_STATE, action);
    expect(response).toEqual(INITIAL_STATE);
  });

  test('Fetch Data Rejected', () => {
    const action = {type: FETCH_DATA_REJECTED};
    const response = H2HReducer(INITIAL_STATE, action);
    expect(response).toEqual(INITIAL_STATE);
  });

  test('Data Fetch', () => {
    const action = {type: DATA_FETCHED, payload: H2HData};
    const response = H2HReducer(INITIAL_STATE, action);
    delete response.data.lastFetched;
    expect(response.data).toEqual({
      allIds: ['1', '2'],
      leagueNames: {'1': 'Test1', '2': 'Test2'},
      standings: {
        '1': [
          {
            entry_name: 'Test_101',
            id: 101,
            matches_drawn: 1,
            matches_lost: 8,
            matches_won: 15,
            player_name: 'Player 101',
            points_for: 1368,
            points_total: 46,
            rank: 1,
          },
        ],
        '2': [
          {
            entry_name: 'Test_201',
            id: 201,
            matches_drawn: 1,
            matches_lost: 8,
            matches_won: 15,
            player_name: 'Player 201',
            points_for: 1368,
            points_total: 46,
            rank: 1,
          },
        ],
      },
    });
  });

  test('Extract Winners', () => {
    const action = {type: EXTRACT_WINNERS, payload: H2HData};
    const response = H2HReducer(INITIAL_STATE, action);
    expect(response.winners).toEqual([
      ['Test1', 'Test_103', 'Player 103', 106],
      ['Test1', 'Test_106', 'Player 106', 106],
      ['Test2', 'Test_202', 'Player 202', 212],
    ]);
  });

  test('Set Links', () => {
    const action1 = {type: DATA_FETCHED, payload: H2HData};
    const data = H2HReducer(INITIAL_STATE, action1);
    const action2 = {type: SET_LINKS};
    const response = H2HReducer(data, action2);
    expect(response.links).toEqual([
      {path: '1', text: 'Test1'},
      {path: '2', text: 'Test2'},
    ]);
  });

  test('Set Default Route', () => {
    const action1 = {type: DATA_FETCHED, payload: H2HData};
    const data = H2HReducer(INITIAL_STATE, action1);
    const action2 = {type: SET_LINKS};
    const links = H2HReducer(data, action2);
    const action3 = {type: SET_DEFAULT_ROUTE};
    const response = H2HReducer(links, action3);
    expect(response.currentTab).toBe('1');
  });

  test('SET ROUTE', () => {
    const action1 = {type: DATA_FETCHED, payload: H2HData};
    const data = H2HReducer(INITIAL_STATE, action1);
    const action2 = {type: SET_LINKS};
    const links = H2HReducer(data, action2);
    const action3 = {type: SET_DEFAULT_ROUTE};
    const defaultTab = H2HReducer(links, action3);
    const action4 = {type: SET_ROUTE, payload: '2'};
    const response = H2HReducer(defaultTab, action4);
    expect(response.currentTab).toBe('2');
  });
});
