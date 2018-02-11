const {
  createBaseURL,
  createURLPath,
  createFullPath,
  createURL,
  getBaseConfig,
} = require('../fplURLGenerator');

describe('FPL URL Generator', () => {
  test('Test createBaseURL function', () => {
    let protocol = 'http';
    let hostname = 'example.com';
    const response1 = createBaseURL(protocol, hostname);
    const expected1 = `${protocol}://${hostname}`;
    expect(response1).toBe(expected1);

    protocol = 'https';
    hostname = 'www.test.com';
    const response2 = createBaseURL(protocol, hostname);
    const expected2 = `${protocol}://${hostname}`;
    expect(response2).toBe(expected2);
  });

  test('Test createURLPath function', () => {
    const response = createURLPath('a', 'b', 'c');
    const expected = 'a/b/c';
    expect(response).toBe(expected);
  });

  test('Test createFullPath function without params', () => {
    const URL = 'http://test.com';
    const response = createFullPath(URL);
    const expected = 'http://test.com';
    expect(response).toBe(expected);
  });

  test('Test createFullPath function with params', () => {
    const URL = 'http://test.com';
    const KEYS = ['q', 'p'];
    const VALUES = ['abc', 'xyz'];
    const response = createFullPath(URL, KEYS, VALUES);
    const expected = 'http://test.com?q=abc&p=xyz';
    expect(response).toBe(expected);
  });

  test('Test createURL function without params', () => {
    const config = {
      PROTOCOL: 'http',
      HOSTNAME: 'test.com',
      PATH: 'random',
    };
    const response = createURL(config)(10);
    const expected = 'http://test.com/random/10';
    expect(response).toBe(expected);
  });

  test('Test createURL function with params', () => {
    const config = {
      PROTOCOL: 'http',
      HOSTNAME: 'test.com',
      PATH: 'random',
      KEYS: ['q', 'p'],
      VALUES: ['abc', 'xyz'],
    };
    const response = createURL(config)(10);
    const expected = 'http://test.com/random/10?q=abc&p=xyz';
    expect(response).toBe(expected);
  });

  test('Test correct base FPL config', () => {
    const response = getBaseConfig();
    const expected = {
      PROTOCOL: 'https',
      HOSTNAME: 'fantasy.premierleague.com',
    };
    expect(response).toEqual(expected);
  });
});
