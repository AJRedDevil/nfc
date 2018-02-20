// npm packages
import React from 'react';
import renderer from 'react-test-renderer';

// our packages
import NotFound from '../404';

test('# Not Found', () => {
  const wrapper = renderer.create(<NotFound />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
