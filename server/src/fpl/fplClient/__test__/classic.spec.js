// our packages
const {getClassicURLs, fetchLeagueStandings} = require('../classic');

describe('Fetch Classic Standings', () => {
  let responses = [];
  beforeAll(async () => {
    const CLASSIC_LEAGUE_ID = 137853;
    responses = await fetchLeagueStandings(CLASSIC_LEAGUE_ID);
  });

  test('Test getClassic URL', () => {
    const params = [[1, 1, 1], [1, 1, 2]];
    const response = getClassicURLs(params, 10);
    const expected = [
      'https://fantasy.premierleague.com/drf/leagues-classic-standings/10?phase=1&le-page=1&ls-page=1',
      'https://fantasy.premierleague.com/drf/leagues-classic-standings/10?phase=1&le-page=1&ls-page=2',
    ];
    expect(response).toEqual(expected);
  });

  test('Test Classic results count', () => {
    expect(responses.length).toBe(2);
  });

  test('Test Classic Standings results', () => {
    const standings = responses.map(item => item.standings);
    expect(standings.length).toBe(2);
    const numbers = standings.map(item => item.number);
    expect(numbers).toEqual([1, 2]);
  });

  test('Test Classic Standings count', () => {
    const standings = responses.map(item => item.standings);
    expect(standings.length).toBe(2);
    const results = standings.reduce(
      (allStandings, item) => [...allStandings, ...item.results],
      []
    );
    expect(results.length).toBe(100);
  });
});
