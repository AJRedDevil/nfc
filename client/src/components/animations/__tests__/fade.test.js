// npm packages
import React from 'react';

// our packages
import Fade from '../fade';

test('# Fade', () => {
  const test = {message: 'test'};
  const wrapper = shallow(
    <Fade test={test}>
      <div>Test</div>
    </Fade>
  );
  expect(wrapper).toMatchSnapshot();
});
