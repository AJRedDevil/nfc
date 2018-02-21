// npm packages
import React from 'react';
import renderer from 'react-test-renderer';

// our packages
import LeagueTitle from '../LeagueTitle';

test('# LeagueTitle', () => {
  const wrapper = renderer
    .create(
      <LeagueTitle
        leagueName="TestLeague"
        creationDate="2018-02-21T00:41:36.214Z"
      />
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
