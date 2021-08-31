import { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import TheLayout from './layouts/TheLayout';
import Login from './pages/Auth/Login';
import Home from './pages/Home';
import Register from './pages/Auth/Register';

export default function Router() {
  return <Fragment>
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/login" />;
        }}
      />

      <Route exact path={["/login", "/register", "/"]}>
        <AuthLayout>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </AuthLayout>
      </Route>


      <Route exact path={["/home"]}>
        <TheLayout>
          <Route path="/home" exact>
            <Home />
          </Route>
        </TheLayout>
      </Route>
    </Switch>
  </Fragment>

}