import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";
import Dashboard from "../Dashboard";
import AuthApi from "../fake-auth/AuthApi";
function Routes() {
  return (
    <Switch>
      <ProtectedRegistration path="/login" component={Login} />
      <ProtectedRegistration path="/signup" component={Signup} />
      <ProtectedDashboard path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
const ProtectedRegistration = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi);
  return (
    <Route
      {...rest}
      render={(props) =>
        !authApi.auth ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
};
const ProtectedDashboard = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi);
  return (
    <Route
      {...rest}
      render={(props) =>
        authApi.auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default Routes;
