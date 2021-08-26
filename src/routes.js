import { Navigate, useRoutes } from 'react-router-dom';
// layouts
// import DashboardLayout from './layouts/dashboard';
import AuthLayout from './layouts/AuthLayout';
// Pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import NotFound from './pages/Auth/404/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // {
    //   path: '/app',
    //   element: <DashboardLayout />,
    //   children: [
    //     { path: '/', element: <Navigate to="/app/dashboard" replace /> },
    //     { path: 'dashboard', element: <DashboardApp /> },
    //     { path: 'bank-from', element: <Bank /> },
    //     { path: 'invoice-form', element: <User /> },
    //     { path: 'payment-form', element: <Products /> },
    //     { path: 'bank-saved', element: <Blog /> }
    //   ]
    // },
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        // { path: '/', element: <Navigate to="/login" replace /> },
        // { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    // { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let user = false
  return user ? <Component /> : <Navigate to="/login" />
}