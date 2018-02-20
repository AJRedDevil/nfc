// npm packages
import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

// our packages
import {getLink, activateCurrent, LinkTab} from '../index';

describe('# LinkTab', () => {
  test('should return link with path added', () => {
    const match = {
      path: '/',
    };
    const link = {
      path: 'test',
      text: 'test',
    };
    const response = getLink({match, link});
    expect(response).toBe('/test');
  });

  test('should return link with slash and path added', () => {
    const match = {
      path: 'http://locahost:8080',
    };
    const link = {
      path: 'test',
      text: 'test',
    };
    const response = getLink({match, link});
    expect(response).toBe('http://locahost:8080/test');
  });

  test('should return active class', () => {
    const link = {
      path: 'test',
      text: 'test',
    };
    const response = activateCurrent({link, currentTab: 'test'});
    expect(response).toBe('is-active');
  });

  test('should return empty string', () => {
    const link = {
      path: 'wrong',
      text: 'test',
    };
    const response = activateCurrent({link, currentTab: 'test'});
    expect(response).toBe('');
  });

  test('LinkTab Wrapper', () => {
    const match = {
      path: 'http://locahost:8080',
    };
    const link = {
      path: 'test',
      text: 'test',
    };
    const onTabClick = () => ({message: 'test'});
    const component = renderer.create(
      <MemoryRouter location="http://locahost:8080">
        <LinkTab
          link={link}
          onTabClick={onTabClick}
          currentTab="test"
          match={match}
        />
      </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
