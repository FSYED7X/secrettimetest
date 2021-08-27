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
          {/* <Switch> */}
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          {/* </Switch> */}
        </AuthLayout>
      </Route>


      <Route exact path={["/home"]}>
        <TheLayout>
          {/* <Switch> */}
          <Route path="/home" exact>
            <Home />
          </Route>
          {/* </Switch> */}
        </TheLayout>
      </Route>
    </Switch>
  </Fragment>

}