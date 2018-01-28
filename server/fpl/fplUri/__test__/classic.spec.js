const {
  getParams,
  createClassicConfig,
  mergeConfig,
  getClassicConfig,
  getClassicURL,
} = require('../classic');

describe('Classic URL Generation', () => {
  test('Test Correct Params Generation', () => {
    const params = [[1, 1, 1], [1, 1, 2]];
    const response = params.map(getParams);
    const expected = [
      {phase: 1, lePage: 1, lsPage: 1},
      {phase: 1, lePage: 1, lsPage: 2},
    ];
    expect(response).toEqual(expected);
  });

  test('Test default ClassicConfig Generation', () => {
    const response = createClassicConfig({});
    const expected = {
      PATH: 'drf/leagues-classic-standings',
      KEYS: ['phase', 'le-page', 'ls-page'],
      VALUES: [1, 1, 1],
    };
    expect(response).toEqual(expected);
  });

  test('Test parameterized createClassicConfig Generation', () => {
    const params = {phase: 1, lePage: 1, lsPage: 2};
    const response = createClassicConfig(params);
    const expected = {
      PATH: 'drf/leagues-classic-standings',
      KEYS: ['phase', 'le-page', 'ls-page'],
      VALUES: [1, 1, 2],
    };
    expect(response).toEqual(expected);
  });

  test('Test mergeConfig & classic config generation', () => {
    const params = [[1, 1, 1], [1, 1, 2]];
    const response1 = params.map(getParams).map(mergeConfig);
    const response2 = params.map(getClassicConfig);
    const expected = [
      {
        PROTOCOL: 'https',
        HOSTNAME: 'fantasy.premierleague.com',
        PATH: 'drf/leagues-classic-standings',
        KEYS: ['phase', 'le-page', 'ls-page'],
        VALUES: [1, 1, 1],
      },
      {
        PROTOCOL: 'https',
        HOSTNAME: 'fantasy.premierleague.com',
        PATH: 'drf/leagues-classic-standings',
        KEYS: ['phase', 'le-page', 'ls-page'],
        VALUES: [1, 1, 2],
      },
    ];
    expect(response1).toEqual(expected);
    expect(response2).toEqual(expected);
  });

  test('Test Correct Classic League URL', () => {
    const params = [[1, 1, 1], [1, 1, 2]];
    const classicURLConfigs = params.map(getClassicURL);
    const response = classicURLConfigs.map(fn => fn(1));
    const expected = [
      'https://fantasy.premierleague.com/drf/leagues-classic-standings/1?phase=1&le-page=1&ls-page=1',
      'https://fantasy.premierleague.com/drf/leagues-classic-standings/1?phase=1&le-page=1&ls-page=2',
    ];
    expect(response).toEqual(expected);
  });
});
