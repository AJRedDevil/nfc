import DateHelper from '../dateHelper';

describe('DateHelper', () => {
  test('withIn an hour', () => {
    const response = DateHelper.isAnHourAgo(new Date().toLocaleDateString());
    expect(response).toBeTruthy();
  });

  test('is an hour ago', () => {
    const nowTimeStamp = new Date().getTime();
    const anHourAgoTimeStamp = nowTimeStamp - 61 * 1000;
    const anHourAgo = new Date(anHourAgoTimeStamp);
    const response = DateHelper.isAnHourAgo(anHourAgo);
    expect(response).toBeFalsy();
  });

  test('ISOToDateString', () => {
    const sample = '2018-02-18T08:14:43.830Z';
    const response = DateHelper.ISOToDateString(sample);
    expect(response).toBe('Sun Feb 18 2018');
  });
});
