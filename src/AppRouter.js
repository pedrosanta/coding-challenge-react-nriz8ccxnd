import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import RootRoute from './routes/RootRoute';
import TasksRoute from './routes/TasksRoute';
import UsersRoute from './routes/UsersRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRoute />,
    children: [
      { index: true, element: <TasksRoute /> },
      { path: 'users', element: <UsersRoute /> }
    ]
  }
]);

function AppRouter() {
  return (
    <CssBaseline>
      <RouterProvider router={router} />
    </CssBaseline>
  );
}

export default AppRouter;
