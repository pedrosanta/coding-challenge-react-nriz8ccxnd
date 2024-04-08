import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import TasksProvider from './contexts/TasksProvider';

import RootRoute from './routes/RootRoute';
import TasksRoute from './routes/TasksRoute';
import UsersRoute from './routes/UsersRoute';
import UsersListRoute, { loader as usersLoader } from './routes/UsersListRoute';
import UserRoute, { loader as userLoader} from './routes/UserRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRoute />,
    children: [
      { index: true,   element: <TasksRoute /> },
      { path: 'users', element: <UsersRoute />, children: [
        { index: true, element: <UsersListRoute />, loader: usersLoader },
        { path: ':id', element: <UserRoute />,      loader: userLoader }
      ]}
    ]
  }
]);

function AppRouter() {
  return (
    <CssBaseline>
      <TasksProvider>
        <RouterProvider router={router} />
      </TasksProvider>
    </CssBaseline>
  );
}

export default AppRouter;
