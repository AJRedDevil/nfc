import API, {getH2HUrl, getData} from '../h2h';

jest.mock('../../config/nfc.json', () => ({
  H2H: [1],
}));

describe('H2H API', () => {
  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => ({success: true, message: 'Test'}),
        ok: true,
      })
    );
  });

  test('fetch from h2h api', async () => {
    const response = await API.getH2HStandings();
    expect(response).toEqual([{success: true, message: 'Test'}]);
  });

  test('should return h2h url', () => {
    const url = 'http://test.com';
    const id = '1';
    const H2HURL = `${url}/${id}`;
    const response = getH2HUrl(url)(id);
    expect(response).toBe(H2HURL);
  });

  test('should return data', async () => {
    const response = await getData('http://test.com/1');
    expect(response).toEqual({success: true, message: 'Test'});
  });
});
