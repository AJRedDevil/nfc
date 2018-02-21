// import enzyme methods
import React from 'react';
// setup file
import {configure, shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

// setup default API_HOST
global.API_HOST = 'http://localhost:3000';

// setup enzyme
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
