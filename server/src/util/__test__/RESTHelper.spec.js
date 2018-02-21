const {getJSONOptions} = require('../RESTHelper');

describe('RESTHelper', () => {
  test('Test for single GET request', () => {
    const testURI = 'http://example.com';
    const response = getJSONOptions(testURI);
    const expected = {
      uri: testURI,
      json: true,
    };
    expect(response).toEqual(expected);
  });

  test('Test list of GET request', () => {
    const testURI = ['http://example.com', 'http://test.com'];
    const response = getJSONOptions(testURI);
    const expected = [
      {
        uri: testURI[0],
        json: true,
      },
      {
        uri: testURI[1],
        json: true,
      },
    ];
    expect(response).toEqual(expected);
  });
});
