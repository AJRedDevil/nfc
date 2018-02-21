// our packages
const {getH2HConfig, getH2HURL} = require('../h2h');

describe('H2H URL Generation', () => {
  test('Test Correct H2H Config Generation', () => {
    const response = getH2HConfig();
    const expected = {
      HOSTNAME: 'fantasy.premierleague.com',
      PATH: 'drf/leagues-h2h-standings',
      PROTOCOL: 'https',
    };
    expect(response).toEqual(expected);
  });

  test('Test Correct H2H Standings URL', () => {
    const response = getH2HURL(1);
    const expected =
      'https://fantasy.premierleague.com/drf/leagues-h2h-standings/1';
    expect(response).toBe(expected);
  });
});
