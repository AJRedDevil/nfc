// npm packages
import React from 'react';
import renderer from 'react-test-renderer';
import {range} from 'lodash';

// our packages
import THead, {TableHeader} from '../thead';

describe('# THead', () => {
  test('TableHeader', () => {
    const tree = renderer.create(<TableHeader text="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('THead', () => {
    const data = range(1, 5).map(i => ({text: `Test${i}`}));
    const tree = renderer.create(<THead data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
