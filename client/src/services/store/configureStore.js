// npm packages
import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {routerMiddleware, routerReducer} from 'react-router-redux';

// our packages
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore(history) {
  const reducers = combineReducers({
    ...rootReducer,
    router: routerReducer,
  });
  const middlewares = applyMiddleware(
    routerMiddleware(history),
    epicMiddleware
  );
  const store = createStore(reducers, composeEnhancers(middlewares));
  return store;
}
