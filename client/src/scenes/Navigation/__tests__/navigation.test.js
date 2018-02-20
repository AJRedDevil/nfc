// npm packages
import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

// our packages
import Navigation from '../index';

// create mock store
const mockStore = configureMockStore();

test('# Navigation', () => {
  const store = mockStore({
    Navigation: {currentTab: 'test'},
    router: {
      location: {
        pathname: 'http://localhost:8080',
      },
    },
  });
  const component = renderer.create(
    <MemoryRouter>
      <Navigation store={store} />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
