// npm packages
import React from 'react';
import renderer from 'react-test-renderer';
import {range} from 'lodash';

// our packages
import TBody, {TableHeader, TableData, TableRow} from '../tbody';

describe('# TBody', () => {
  test('TableHeader', () => {
    const tree = renderer.create(<TableHeader data="SN" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('TableData', () => {
    const tree = renderer.create(<TableData data="1" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('TableRow', () => {
    const data = [1, 'test1', 'test2', 'test3'];
    const tree = renderer.create(<TableRow data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('TBody', () => {
    const headers = ['SN', 'Message'];
    const content = range(1, 5).map(i => [i, `test${i}`]);
    const data = [headers, ...content];
    const tree = renderer.create(<TBody data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
