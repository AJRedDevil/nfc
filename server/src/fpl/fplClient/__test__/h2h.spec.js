// our packages
const {fetchH2HStandings} = require('../../fplClient');

describe('Fetch H2H Standings', () => {
  let response = {};
  beforeAll(async () => {
    const H2H_LEAGUE_ID = 262415;
    response = await fetchH2HStandings(H2H_LEAGUE_ID);
  });

  test('Test H2H Standings', async () => {
    const {standings} = response;
    expect(standings.number).toBe(1);
    expect(standings.has_next).toBeFalsy();
    expect(standings.results.length).toBe(20);
  });

  test('Test H2H This Matches', () => {
    const nextMatches = response.matches_next;
    expect(nextMatches.number).toBe(1);
    expect(nextMatches.has_next).toBeFalsy();
    expect(nextMatches.results.length).toBe(10);
  });

  test('Test H2H Next Matches', () => {
    const currentMatches = response.matches_this;
    expect(currentMatches.number).toBe(1);
    expect(currentMatches.has_next).toBeFalsy();
    expect(currentMatches.results.length).toBe(10);
  });
});
