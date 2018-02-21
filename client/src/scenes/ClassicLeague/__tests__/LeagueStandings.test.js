// npm packages
import React from 'react';
import renderer from 'react-test-renderer';

// our packages
import LeagueStandings, {getBody} from '../LeagueStandings';

const standings = [
  {
    rank: 1,
    entry_name: 'test',
    player_name: 'test_1',
    event_total: 50,
    total: 100,
  },
  {
    rank: 2,
    entry_name: 'test',
    player_name: 'test_2',
    event_total: 80,
    total: 200,
  },
];

describe('# LeagueStandings', () => {
  test('get correct body from standings', () => {
    const response = getBody(standings);
    expect(response).toEqual([
      [1, 'test', 'test_1', 50, 100],
      [2, 'test', 'test_2', 80, 200],
    ]);
  });

  test('LeagueStandings wrapper', () => {
    const head = [
      {text: 'Rank'},
      {text: 'Team'},
      {text: 'Player'},
      {text: 'GW'},
      {text: 'Total'},
    ];
    const wrapper = renderer
      .create(<LeagueStandings head={head} standings={standings} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
