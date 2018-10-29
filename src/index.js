import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter, ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import rootSage from 'sagas';
import Routes from 'routes';

import styles from './index.css';

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    )
  )
)

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

