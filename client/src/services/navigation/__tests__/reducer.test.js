import navigation from '../reducer';

describe('Navigation Reducer', () => {
  let INITIAL_STATE;
  beforeAll(() => {
    INITIAL_STATE = {currentTab: ''};
  });

  test('default', () => {
    const action = {type: null};
    const response = navigation(INITIAL_STATE, action);
    expect(response).toEqual(INITIAL_STATE);
  });

  test('set default route', () => {
    const action = {type: '@NAVIGATION/SET_DEFAULT_ROUTE', payload: '/test'};
    const response = navigation(INITIAL_STATE, action);
    expect(response).toEqual({currentTab: 'test'});
  });

  test('set route', () => {
    const action = {type: '@NAVIGATION/SET_ROUTE', payload: 'test'};
    const response = navigation(INITIAL_STATE, action);
    expect(response).toEqual({currentTab: 'test'});
  });
});
