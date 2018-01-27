// our packages
const {getClassicURL, getH2HURL} = require('../../fplUri');

describe('Test FPL URI Generation', () => {
  test('Generate Correct Classic League URL', () => {
    const createClassicURL = getClassicURL([1, 1, 1]);
    const response = createClassicURL(1);
    const expected =
      'https://fantasy.premierleague.com/drf/leagues-classic-standings/1?&phase=1&le-page=1&ls-page=1';
    expect(response).toBe(expected);
  });

  test('Generate Correct H2H Standings URL', () => {
    const response = getH2HURL(1);
    const expected =
      'https://fantasy.premierleague.com/drf/leagues-h2h-standings/1';
    expect(response).toBe(expected);
  });
});
