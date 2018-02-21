// npm packages
import React from 'react';
import renderer from 'react-test-renderer';

// our packages
import H2HStandings, {getBody} from '../H2HStandings';

const standings = [
  {
    rank: 1,
    entry_name: 'test',
    player_name: 'test_1',
    matches_won: 1,
    matches_drawn: 1,
    matches_lost: 1,
    points_for: 1,
    points_total: 100,
  },
  {
    rank: 2,
    entry_name: 'test',
    player_name: 'test_2',
    matches_won: 2,
    matches_drawn: 2,
    matches_lost: 2,
    points_for: 2,
    points_total: 200,
  },
];

describe('# H2HStandings', () => {
  test('get correct body from standings', () => {
    const response = getBody(standings);
    expect(response).toEqual([
      [1, 'test', 'test_1', 1, 1, 1, 1, 100],
      [2, 'test', 'test_2', 2, 2, 2, 2, 200],
    ]);
  });

  test('H2HStandings wrapper', () => {
    const head = [
      {text: 'Rank'},
      {text: 'Team'},
      {text: 'Player'},
      {text: 'Won'},
      {text: 'Drawn'},
      {text: 'Lost'},
      {text: 'For'},
      {text: 'Total'},
    ];
    const wrapper = renderer
      .create(<H2HStandings head={head} standings={standings} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
