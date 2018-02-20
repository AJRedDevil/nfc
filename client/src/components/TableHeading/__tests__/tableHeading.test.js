// npm packages
import React from 'react';
import renderer from 'react-test-renderer';

// our packages
import TableHeading from '../index';

test('# TableHeading', () => {
  const wrapper = renderer
    .create(<TableHeading title="test" subtitle="snapshot" />)
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
