// npm packages
import React from 'react';
import renderer from 'react-test-renderer';
import {range} from 'lodash';

// our packages
import Tfoot, {TableHeader} from '../tfoot';

describe('# Tfoot', () => {
  test('TableHeader', () => {
    const tree = renderer.create(<TableHeader text="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Tfoot', () => {
    const data = range(1, 5).map(i => ({text: `Test${i}`}));
    const tree = renderer.create(<Tfoot data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
