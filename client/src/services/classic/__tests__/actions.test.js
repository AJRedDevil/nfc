// our packages
import {FETCH_DATA} from '../actionTypes';
import {fetchClassicData} from '../actions';

describe('Classic Action Creators', () => {
  test('Correctly Fetch Data', () => {
    const response = fetchClassicData();
    const expected = {type: FETCH_DATA};
    expect(response).toEqual(expected);
  });
});
