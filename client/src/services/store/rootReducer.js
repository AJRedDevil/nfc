// npm packages
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

// our packages
import ClassicStandings from '../classic/reducer';
import H2HStandings from '../h2h/reducer';
import Navigation from '../navigation/reducer';

const rootReducer = combineReducers({
  ClassicStandings,
  H2HStandings,
  Navigation,
  router: routerReducer,
});

export default rootReducer;
