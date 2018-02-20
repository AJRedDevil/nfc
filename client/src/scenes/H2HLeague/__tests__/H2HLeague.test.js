// npm packages
import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';

// our packages
import H2HLeague from '../index';

// create mock store
const mockStore = configureMockStore();

test('# H2HLeague', () => {
  const standings = {
    1: [
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
    ],
    2: [
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
    ],
  };
  const store = mockStore({
    H2HStandings: {
      currentTab: '1',
      links: [
        {
          path: '',
          text: 'HomePage',
        },
        {
          path: 'test',
          text: 'TestPage',
        },
      ],
      data: {
        lastFetched: '2018-02-20',
        allIds: ['1', '2'],
        leagueNames: {
          1: 'league_1',
          2: 'league_2',
        },
        standings,
      },
    },
    schema: {
      head: [
        {text: 'Rank'},
        {text: 'Team'},
        {text: 'Player'},
        {text: 'Won'},
        {text: 'Drawn'},
        {text: 'Lost'},
        {text: 'For'},
        {text: 'Total'},
      ],
    },
  });
  const match = {
    isExact: false,
    params: {},
    path: 'http://localhost:8080',
    url: '',
  };
  const history = {
    push: () => {},
  };
  const links = [{path: '', text: 'home'}, {path: 'test', text: 'TestPage'}];

  const component = renderer
    .create(
      <MemoryRouter>
        <H2HLeague
          store={store}
          match={match}
          history={history}
          links={links}
        />
      </MemoryRouter>
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});
