// npm packages
import {ActionsObservable} from 'redux-observable';
import {Observable} from 'rxjs';

// our packages
import classicEpic from '../epic';
import {FETCH_DATA} from '../actionTypes';
import classicData from './classicData.json';
import {classicLeagueAPI} from '../../api';

jest.mock('../../api', () => ({
  classicLeagueAPI: {getClassicStandings: jest.fn()},
}));

describe('Classic Epic', () => {
  beforeAll(() => {
    const classicLeagueAPIMock = jest.fn();
    classicLeagueAPIMock
      .mockReturnValueOnce(classicData)
      .mockReturnValueOnce(Observable.throw('Data Rejected'));
    classicLeagueAPI.getClassicStandings.mockImplementation(
      classicLeagueAPIMock
    );
  });

  test('should fetch classic standing', () => {
    const input$ = ActionsObservable.from([{type: FETCH_DATA}]);

    classicEpic
      .fetchClassicStandingsEpic(input$)
      .toArray()
      .subscribe(res => {
        expect(res.length).toBe(4);
        expect(res).toEqual([
          {
            payload: {
              league: {
                closed: true,
                created: '2017-07-12T10:36:17Z',
                id: 1,
                name: 'Test',
                start_event: 1,
              },
              new_entries: {has_next: false, number: 1, results: []},
              standings: {
                has_next: true,
                number: 1,
                results: [
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
                ],
              },
              update_status: 0,
            },
            type: '@CLASSIC/DATA_FETCHED',
          },
          {
            payload: {
              league: {
                closed: true,
                created: '2017-07-12T10:36:17Z',
                id: 1,
                name: 'Test',
                start_event: 1,
              },
              new_entries: {has_next: false, number: 1, results: []},
              standings: {
                has_next: true,
                number: 1,
                results: [
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
                ],
              },
              update_status: 0,
            },
            type: '@CLASSIC/EXTRACT_WINNERS',
          },
          {
            payload: {
              league: {
                closed: true,
                created: '2017-07-12T10:36:17Z',
                id: 1,
                name: 'Test',
                start_event: 1,
              },
              new_entries: {has_next: false, number: 1, results: []},
              standings: {
                has_next: true,
                number: 2,
                results: [
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
              update_status: 0,
            },
            type: '@CLASSIC/DATA_FETCHED',
          },
          {
            payload: {
              league: {
                closed: true,
                created: '2017-07-12T10:36:17Z',
                id: 1,
                name: 'Test',
                start_event: 1,
              },
              new_entries: {has_next: false, number: 1, results: []},
              standings: {
                has_next: true,
                number: 2,
                results: [
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
              update_status: 0,
            },
            type: '@CLASSIC/EXTRACT_WINNERS',
          },
        ]);
      });
  });

  test('should return failure message', () => {
    const input$ = ActionsObservable.from([{type: FETCH_DATA}]);

    classicEpic
      .fetchClassicStandingsEpic(input$)
      .toArray()
      .subscribe(res =>
        expect(res).toEqual([
          {
            error: true,
            payload: 'Data Rejected',
            type: '@CLASSIC/FETCH_DATA_REJECTED',
          },
        ])
      );
  });
});
