import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter, ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers';
// import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import rootSage from 'sagas';
import Routes from 'routes';

// import styles from './index.css';

// import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
const GITHUB_BASE_URL = 'http://localhost:4050/graphql';
const ACCESS_TOKEN = 'b18b66f384c26e70bbf5ad4883c42e63ca07389c'
const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
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

