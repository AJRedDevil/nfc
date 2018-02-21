import Util, {
  getResults,
  getHomeIndividualResult,
  getAwayIndividualResult,
  getWeekResults,
  getGroupedScore,
  getTop,
} from '../util';
import H2HData from './h2hData.json';

describe('H2H Util', () => {
  const singleH2HLeagueData = H2HData[0];

  test('Get results of single league', () => {
    const response = getResults(singleH2HLeagueData);
    expect(response).toEqual(singleH2HLeagueData.matches_this.results);
  });

  test('Individual Current GW HOME Result of single legae', () => {
    const response = getHomeIndividualResult(
      singleH2HLeagueData.matches_this.results[0]
    );
    expect(response).toEqual({
      event_total: 101,
      entry_name: 'Test_101',
      player_name: 'Player 101',
    });
  });

  test('Individual Current GW AWAY Result of single leage', () => {
    const response = getAwayIndividualResult(
      singleH2HLeagueData.matches_this.results[1]
    );
    expect(response).toEqual({
      event_total: 104,
      entry_name: 'Test_104',
      player_name: 'Player 104',
    });
  });

  test('Current GW Results of single league', () => {
    const response = getWeekResults(getResults(singleH2HLeagueData));
    expect(response).toEqual([
      {
        event_total: 101,
        entry_name: 'Test_101',
        player_name: 'Player 101',
      },
      {
        event_total: 102,
        entry_name: 'Test_102',
        player_name: 'Player 102',
      },
      {
        event_total: 106,
        entry_name: 'Test_103',
        player_name: 'Player 103',
      },
      {
        event_total: 104,
        entry_name: 'Test_104',
        player_name: 'Player 104',
      },
      {
        event_total: 105,
        entry_name: 'Test_105',
        player_name: 'Player 105',
      },
      {
        event_total: 106,
        entry_name: 'Test_106',
        player_name: 'Player 106',
      },
    ]);
  });

  test('Current GW Group score', () => {
    const response = getGroupedScore(singleH2HLeagueData);
    expect(response).toEqual({
      '101': [
        {
          event_total: 101,
          entry_name: 'Test_101',
          player_name: 'Player 101',
        },
      ],
      '102': [
        {
          event_total: 102,
          entry_name: 'Test_102',
          player_name: 'Player 102',
        },
      ],
      '104': [
        {
          event_total: 104,
          entry_name: 'Test_104',
          player_name: 'Player 104',
        },
      ],
      '105': [
        {
          event_total: 105,
          entry_name: 'Test_105',
          player_name: 'Player 105',
        },
      ],
      '106': [
        {
          event_total: 106,
          entry_name: 'Test_103',
          player_name: 'Player 103',
        },
        {
          event_total: 106,
          entry_name: 'Test_106',
          player_name: 'Player 106',
        },
      ],
    });
  });

  test('Current GW Top H2H', () => {
    const response = getTop(getGroupedScore(singleH2HLeagueData));
    expect(response).toEqual([
      {
        event_total: 106,
        entry_name: 'Test_103',
        player_name: 'Player 103',
      },
      {
        event_total: 106,
        entry_name: 'Test_106',
        player_name: 'Player 106',
      },
    ]);
  });

  test('Current GW H2H Winners of all leagues', () => {
    const response = Util.getH2HWinners(H2HData);
    expect(response).toEqual([
      ['Test1', 'Test_103', 'Player 103', 106],
      ['Test1', 'Test_106', 'Player 106', 106],
      ['Test2', 'Test_202', 'Player 202', 212],
    ]);
  });

  test('Current GW H2H Standings of all leagues', () => {
    const response = Util.getH2HStandings(H2HData);
    delete response.lastFetched;
    expect(response).toEqual({
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

  test('Get Links of H2H', () => {
    const response = Util.getLinks(Util.getH2HStandings(H2HData));
    expect(response).toEqual([
      {path: '1', text: 'Test1'},
      {path: '2', text: 'Test2'},
    ]);
  });
});
