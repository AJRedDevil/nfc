const {getScriptName} = require('../pathHelper');

test('Get correct filename', () => {
  const response = getScriptName(__filename);
  const expected = 'pathHelper.spec';
  expect(response).toBe(expected);
});
