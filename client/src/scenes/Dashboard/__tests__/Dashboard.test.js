// npm packages
import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

// our packages
import Dashboard from '../index';
import DashboardMock from './mock';

// create mock store
const mockStore = configureMockStore();

test('# Dashboard', () => {
  const store = mockStore({
    ClassicStandings: DashboardMock.ClassicStandings,
    H2HStandings: DashboardMock.H2HStandings,
  });
  const wrapper = renderer
    .create(
      <Provider store={store}>
        <Dashboard store={store} />
      </Provider>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
