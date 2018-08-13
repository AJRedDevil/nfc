// npm packages
import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

// our packages
import ClassicWinners from '../components/ClassicWinners';
import DashboardMock from './mock.json';

// create mock store
const mockStore = configureMockStore();
test('# ClassicWinners', () => {
  const store = mockStore({
    ClassicStandings: DashboardMock.ClassicStandings,
  });
  const wrapper = renderer.create(<ClassicWinners store={store} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
