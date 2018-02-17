// npm packages
// eslint-disable-next-line no-unused-vars
import rxjs from 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import {ConnectedRouter as Router} from 'react-router-redux';

// our packages
import configureStore from './services/store';
import App from './app';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Setup up debug
if (process.env.NODE_ENV !== 'production') {
  localStorage.setItem('debug', 'nfc-client:*');
}

const MainApp = () => (
  <Provider store={configureStore(history)}>
    <div className="container">
      <Router history={history}>
        <App />
      </Router>
    </div>
  </Provider>
);

ReactDOM.hydrate(<MainApp />, document.getElementById('root'));
