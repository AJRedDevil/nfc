// npm packages
import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

// our packages
import H2HWinners from '../components/H2HWinners';
import DashboardMock from './mock.json';

// create mock store
const mockStore = configureMockStore();

test('# H2HWinners', () => {
  const store = mockStore({
    H2HStandings: DashboardMock.H2HStandings,
  });
  const wrapper = renderer.create(<H2HWinners store={store} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
