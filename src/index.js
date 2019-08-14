import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import infinityAppReducers from './reducers';

import './index.css';
import App from './App';

import Login from './components/pages/login/Login';
import Home from './components/pages/home/Home';
import Register from './components/pages/register/Register';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  infinityAppReducers,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register-user" exact component={Register} />
          <Route path="/" exact component={Home} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
