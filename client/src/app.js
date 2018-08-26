// npm packages
import React from 'react';
import {Route, Switch} from 'react-router-dom';

import 'bulma/css/bulma.css';

// our packages
import Navigation from './scenes/Navigation';
import Dashboard from './scenes/Dashboard';
import ClassicLeague from './scenes/ClassicLeague';
import H2HLeague from './scenes/H2HLeague';
import GameweekOverall from './scenes/GameweekOverall';
import Errors from './components/errors';

const App = () => (
  <section
    className="main-content columns is-fullheight"
    style={{marginTop: '-0.6in'}}
  >
    <Navigation />
    <div className="container column is-10">
      <div className="section">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/classicleague" component={ClassicLeague} />
          <Route path="/h2hleague" component={H2HLeague} />
          <Route path="/gwtable" component={GameweekOverall} />
          <Route component={Errors.NotFound} />
        </Switch>
      </div>
    </div>
  </section>
);

export default App;
