// our packages
import classicReducer from '../reducer';
import {
  FETCH_DATA,
  FETCH_DATA_REJECTED,
  DATA_FETCHED,
  EXTRACT_WINNERS,
} from '../actionTypes';
import classicLeagueSchema from '../classicLeagueSchema.json';
import top5Schema from '../top5Schema.json';
import classicData from './classicData.json';

const INITIAL_STATE = {
  classicLeagueSchema,
  top5Schema,
  data: {
    leagueName: '',
    creationDate: '',
    lastFetched: '',
    standings: [],
  },
};

describe('Classic Reducer', () => {
  test('should return intial state for default', () => {
    const action = {type: null};
    const response = classicReducer(INITIAL_STATE, action);
    expect(response).toEqual(INITIAL_STATE);
  });

  test('should return state for fetch data', () => {
    const action = {type: FETCH_DATA};
    const response = classicReducer(INITIAL_STATE, action);
    expect(response).toEqual(INITIAL_STATE);
  });

  test('should return state for data not fetched', () => {
    const action = {type: FETCH_DATA_REJECTED};
    const response = classicReducer(INITIAL_STATE, action);
    expect(response).toEqual(INITIAL_STATE);
  });

  test('should return updated state for data fetched', () => {
    const action = {type: DATA_FETCHED, payload: classicData};
    const response = classicReducer(INITIAL_STATE, action);
    delete response.data.lastFetched;
    expect(response).toEqual({
      classicLeagueSchema: {
        head: [
          {text: 'Rank'},
          {text: 'Team'},
          {text: 'Manager'},
          {text: 'GW'},
          {text: 'TOT'},
        ],
      },
      data: {
        creationDate: '2017-07-12T10:36:17Z',
        leagueName: 'Test',
        standings: [
          {
            entry: 100,
            entry_name: 'Test_1',
            event_total: 70,
            id: 1,
            last_rank: 1,
            league: 1827,
            movement: 'down',
            own_entry: false,
            player_name: 'Test 1',
            rank: 1,
            rank_sort: 1,
            start_event: 1,
            stop_event: 38,
            total: 1436,
          },
          {
            entry: 705721,
            entry_name: 'Test_2',
            event_total: 88,
            id: 2,
            last_rank: 2,
            league: 1827,
            movement: 'up',
            own_entry: false,
            player_name: 'Test 2',
            rank: 2,
            rank_sort: 2,
            start_event: 1,
            stop_event: 38,
            total: 1436,
          },
          {
            entry: 232470,
            entry_name: 'Test_3',
            event_total: 78,
            id: 3,
            last_rank: 3,
            league: 1827,
            movement: 'up',
            own_entry: false,
            player_name: 'Test 3',
            rank: 3,
            rank_sort: 3,
            start_event: 1,
            stop_event: 38,
            total: 1428,
          },
          {
            entry: 641905,
            entry_name: 'Test_4',
            event_total: 53,
            id: 4,
            last_rank: 4,
            league: 1827,
            movement: 'down',
            own_entry: false,
            player_name: 'Test 4',
            rank: 4,
            rank_sort: 4,
            start_event: 1,
            stop_event: 38,
            total: 1427,
          },
          {
            entry: 610872,
            entry_name: 'Test_5',
            event_total: 90,
            id: 5,
            last_rank: 5,
            league: 1827,
            movement: 'up',
            own_entry: false,
            player_name: 'Test 5',
            rank: 5,
            rank_sort: 5,
            start_event: 1,
            stop_event: 38,
            total: 1423,
          },
          {
            entry: 1374,
            entry_name: 'Test_6',
            event_total: 65,
            id: 6,
            last_rank: 6,
            league: 1827,
            movement: 'down',
            own_entry: false,
            player_name: 'Test 6',
            rank: 6,
            rank_sort: 6,
            start_event: 1,
            stop_event: 38,
            total: 1423,
          },
          {
            entry: 21561,
            entry_name: 'Test_7',
            event_total: 72,
            id: 7,
            last_rank: 7,
            league: 1827,
            movement: 'same',
            own_entry: false,
            player_name: 'Test 7',
            rank: 7,
            rank_sort: 7,
            start_event: 1,
            stop_event: 38,
            total: 1418,
          },
        ],
      },
      top5Schema: {
        head: [
          {text: 'Position'},
          {text: 'Team Name'},
          {text: 'Player Name'},
          {text: 'Gameweek Points'},
        ],
        subTitle: 'Top 5',
        title: 'NFC Classic',
      },
    });
  });

  test('should extract winners', () => {
    const action = {type: EXTRACT_WINNERS, payload: classicData};
    const response = classicReducer(INITIAL_STATE, action);
    expect(response.top5).toEqual([
      [1, 'Test_5', 'Test 5', 90],
      [2, 'Test_2', 'Test 2', 88],
      [3, 'Test_3', 'Test 3', 78],
      [4, 'Test_7', 'Test 7', 72],
      [5, 'Test_1', 'Test 1', 70]
    ]);
  });
});
