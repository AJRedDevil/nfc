// npm packages
// eslint-disable-next-line no-unused-vars
import rxjs from 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';

// our packages
import App from './app';

ReactDOM.hydrate(<App />, document.getElementById('root'));
