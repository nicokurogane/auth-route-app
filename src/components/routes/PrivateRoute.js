import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LocalStorage from '../../data/local-storage-handler/LocalStorage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      LocalStorage.getAuthToken() !== null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
