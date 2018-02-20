// npm packages
import React from 'react';
import renderer from 'react-test-renderer';

// our packages
import LoadingTable from '../index';

test('# LoadingTable', () => {
  const wrapper = renderer.create(<LoadingTable title="test" />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
