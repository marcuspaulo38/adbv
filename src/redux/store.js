import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from '../redux/reducers';
import rootSaga from '../redux/sagas';

const history = createHistory();
const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware];

// window.__REDUX_DEVTOOLS_EXTENSION__ &&
//window.__REDUX_DEVTOOLS_EXTENSION__(),

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(...middlewares)
      )
    : applyMiddleware(...middlewares);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  enhancer
);
sagaMiddleware.run(rootSaga);
export { store, history };
