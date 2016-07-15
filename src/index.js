import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

import Welcome from './components/welcome';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// uncomment this when authentication is implemented
// const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
// if (token) {
//   // we need to update application state
//   store.dispatch({ type: AUTH_USER });
// }

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>
      </Route>
    </Router>
  </Provider>
  ,document.querySelector('.container'));