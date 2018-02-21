// npm packages
import {ActionsObservable} from 'redux-observable';
import {Observable} from 'rxjs/Observable';

// our packages
import H2HEpic from '../epic';
import {FETCH_DATA} from '../actionTypes';
import H2HData from './h2hData.json';
import {h2hLeagueAPI} from '../../api';

jest.mock('../../api', () => ({
  h2hLeagueAPI: {getH2HStandings: jest.fn()},
}));

describe('H2H Epic', () => {
  beforeAll(() => {
    const h2hLeagueAPIMock = jest.fn();
    h2hLeagueAPIMock
      .mockReturnValueOnce(H2HData)
      .mockReturnValueOnce(Observable.throw('Data Rejected'));
    h2hLeagueAPI.getH2HStandings.mockImplementation(h2hLeagueAPIMock);
  });

  test('Fetch H2H Standing', () => {
    const input$ = ActionsObservable.from([{type: FETCH_DATA}]);

    H2HEpic.fetchH2HStandingsEpic(input$)
      .toArray()
      .subscribe(res => {
        expect(res.length).toBe(8);
        expect(res).toEqual([
          {
            payload: {
              league: {id: 1, name: 'Test1'},
              matches_next: {results: [{}]},
              matches_this: {
                results: [
                  {
                    entry_1_entry: 101,
                    entry_1_name: 'Test_101',
                    entry_1_player_name: 'Player 101',
                    entry_1_points: 101,
                    entry_2_entry: 102,
                    entry_2_name: 'Test_102',
                    entry_2_player_name: 'Player 102',
                    entry_2_points: 102,
                    id: 1,
                  },
                  {
                    entry_1_entry: 103,
                    entry_1_name: 'Test_103',
                    entry_1_player_name: 'Player 103',
                    entry_1_points: 106,
                    entry_2_entry: 104,
                    entry_2_name: 'Test_104',
                    entry_2_player_name: 'Player 104',
                    entry_2_points: 104,
                    id: 2,
                  },
                  {
                    entry_1_entry: 105,
                    entry_1_name: 'Test_105',
                    entry_1_player_name: 'Player 105',
                    entry_1_points: 105,
                    entry_2_entry: 106,
                    entry_2_name: 'Test_106',
                    entry_2_player_name: 'Player 106',
                    entry_2_points: 106,
                    id: 3,
                  },
                ],
              },
              new_entries: {},
              standings: {
                results: [
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
              },
            },
            type: '@H2H/DATA_FETCHED',
          },
          {
            payload: {
              league: {id: 1, name: 'Test1'},
              matches_next: {results: [{}]},
              matches_this: {
                results: [
                  {
                    entry_1_entry: 101,
                    entry_1_name: 'Test_101',
                    entry_1_player_name: 'Player 101',
                    entry_1_points: 101,
                    entry_2_entry: 102,
                    entry_2_name: 'Test_102',
                    entry_2_player_name: 'Player 102',
                    entry_2_points: 102,
                    id: 1,
                  },
                  {
                    entry_1_entry: 103,
                    entry_1_name: 'Test_103',
                    entry_1_player_name: 'Player 103',
                    entry_1_points: 106,
                    entry_2_entry: 104,
                    entry_2_name: 'Test_104',
                    entry_2_player_name: 'Player 104',
                    entry_2_points: 104,
                    id: 2,
                  },
                  {
                    entry_1_entry: 105,
                    entry_1_name: 'Test_105',
                    entry_1_player_name: 'Player 105',
                    entry_1_points: 105,
                    entry_2_entry: 106,
                    entry_2_name: 'Test_106',
                    entry_2_player_name: 'Player 106',
                    entry_2_points: 106,
                    id: 3,
                  },
                ],
              },
              new_entries: {},
              standings: {
                results: [
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
              },
            },
            type: '@H2H/EXTRACT_WINNERS',
          },
          {type: '@H2H/SET_LINKS'},
          {type: '@H2H/SET_DEFAULT_ROUTE'},
          {
            payload: {
              league: {id: 2, name: 'Test2'},
              matches_next: {results: [{}]},
              matches_this: {
                results: [
                  {
                    entry_1_entry: 201,
                    entry_1_name: 'Test_201',
                    entry_1_player_name: 'Player 201',
                    entry_1_points: 201,
                    entry_2_entry: 202,
                    entry_2_name: 'Test_202',
                    entry_2_player_name: 'Player 202',
                    entry_2_points: 212,
                    id: 1,
                  },
                  {
                    entry_1_entry: 203,
                    entry_1_name: 'Test_203',
                    entry_1_player_name: 'Player 203',
                    entry_1_points: 203,
                    entry_2_entry: 204,
                    entry_2_name: 'Test_204',
                    entry_2_player_name: 'Player 204',
                    entry_2_points: 204,
                    id: 2,
                  },
                  {
                    entry_1_entry: 205,
                    entry_1_name: 'Test_205',
                    entry_1_player_name: 'Player 205',
                    entry_1_points: 205,
                    entry_2_entry: 206,
                    entry_2_name: 'Test_206',
                    entry_2_player_name: 'Player 106',
                    entry_2_points: 206,
                    id: 3,
                  },
                ],
              },
              new_entries: {},
              standings: {
                results: [
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
            },
            type: '@H2H/DATA_FETCHED',
          },
          {
            payload: {
              league: {id: 2, name: 'Test2'},
              matches_next: {results: [{}]},
              matches_this: {
                results: [
                  {
                    entry_1_entry: 201,
                    entry_1_name: 'Test_201',
                    entry_1_player_name: 'Player 201',
                    entry_1_points: 201,
                    entry_2_entry: 202,
                    entry_2_name: 'Test_202',
                    entry_2_player_name: 'Player 202',
                    entry_2_points: 212,
                    id: 1,
                  },
                  {
                    entry_1_entry: 203,
                    entry_1_name: 'Test_203',
                    entry_1_player_name: 'Player 203',
                    entry_1_points: 203,
                    entry_2_entry: 204,
                    entry_2_name: 'Test_204',
                    entry_2_player_name: 'Player 204',
                    entry_2_points: 204,
                    id: 2,
                  },
                  {
                    entry_1_entry: 205,
                    entry_1_name: 'Test_205',
                    entry_1_player_name: 'Player 205',
                    entry_1_points: 205,
                    entry_2_entry: 206,
                    entry_2_name: 'Test_206',
                    entry_2_player_name: 'Player 106',
                    entry_2_points: 206,
                    id: 3,
                  },
                ],
              },
              new_entries: {},
              standings: {
                results: [
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
            },
            type: '@H2H/EXTRACT_WINNERS',
          },
          {type: '@H2H/SET_LINKS'},
          {type: '@H2H/SET_DEFAULT_ROUTE'},
        ]);
      });
  });

  test('Fetch H2H Data Failture', () => {
    const input$ = ActionsObservable.from([{type: FETCH_DATA}]);

    H2HEpic.fetchH2HStandingsEpic(input$)
      .toArray()
      .subscribe(response =>
        expect(response).toEqual([
          {
            type: '@H2H/FETCH_DATA_REJECTED',
            payload: 'Data Rejected',
            error: true,
          },
        ])
      );
  });
});
