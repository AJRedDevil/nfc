// npm packages
import React from 'react';
import {Provider} from 'react-redux';

import 'bulma/css/bulma.css';

// our packages
import configureStore from './services/store';
import Home from './scenes/Home';

const App = () => (
  <Provider store={configureStore()}>
    <Home />
  </Provider>
);

export default App;
