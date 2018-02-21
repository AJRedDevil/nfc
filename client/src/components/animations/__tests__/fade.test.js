// npm packages
import React from 'react';
import renderer from 'react-test-renderer';

// our packages
import Fade from '../fade';

test('# Fade', () => {
  const test = {message: 'test'};
  const wrapper = renderer
    .create(
      <Fade test={test}>
        <div>Test</div>
      </Fade>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
