// npm packages
import React from 'react';
import renderer from 'react-test-renderer';
import {range} from 'lodash';

// our packages
import Table from '../index';

test('# Table', () => {
  const headers = ['SN', 'Message'];
  const content = range(1, 5).map(i => [i, `test${i}`]);
  const data = {
    head: range(1, 5).map(i => ({text: `Test${i}`})),
    foot: range(1, 5).map(i => ({text: `Test${i}`})),
    body: [headers, ...content],
  };
  const tree = renderer.create(<Table data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
