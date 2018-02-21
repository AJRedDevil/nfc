// npm packages
import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

// our packages
import H2HTitle from '../H2HTitle';

test('# Navigation', () => {
  const props = {
    currentTab: 'test',
    setNextTab: () => {},
    links: [{path: '', text: 'home'}, {path: 'test', text: 'TestPage'}],
  };
  const component = renderer.create(
    <MemoryRouter>
      <H2HTitle {...props} />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
