import API from '../classic';

jest.mock('../../config/nfc.json', () => ({
  H2H: [1],
  CLASSIC: [101],
}));

describe('Classic API', () => {
  beforeAll(() => {
    global.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({json: () => ({success: true, message: 'Test'})})
      );
  });

  test('fetch from classic api', async () => {
    const response = await API.getClassicStandings();
    expect(response).toEqual({success: true, message: 'Test'});
  });
});
