// npm packages
import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';

// our packages
import ClassicLeague from '../index';

// create mock store
const mockStore = configureMockStore();

test('# ClassicLeague', () => {
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
  const store = mockStore({
    ClassicStandings: {
      data: {
        leagueName: 'TestLeague',
        creationDate: '2018-02-21T00:41:36.214Z',
        lastFetched: '2018-02-21',
        standings,
      },
    },
    classicLeagueSchema: {
      head: [
        {text: 'Rank'},
        {text: 'Team'},
        {text: 'Player'},
        {text: 'GW'},
        {text: 'Total'},
      ],
    },
  });

  const component = renderer
    .create(
      <MemoryRouter>
        <ClassicLeague store={store} />
      </MemoryRouter>
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});
