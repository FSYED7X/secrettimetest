import { Redirect, Route, Switch } from 'react-router-dom';
// layouts
// import DashboardLayout from './layouts/dashboard';
import AuthLayout from './layouts/AuthLayout';
// Pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import NotFound from './pages/Auth/404/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return <AuthLayout>
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/login" />;
        }}
      />
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
    </Switch>

  </AuthLayout>
}