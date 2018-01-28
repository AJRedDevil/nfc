const {getJSONOptions} = require('../RESTHelper');

test('Test correct GET request', () => {
  const testURI = 'http://example.com';
  const response = getJSONOptions(testURI);
  const expected = {
    uri: testURI,
    json: true,
  };
  expect(response).toEqual(expected);
});
