import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';

import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Root from './routes/Root';

const router = createBrowserRouter([
  { path: '/', element: <Root /> }
]);

function AppRouter() {
  return (
    <CssBaseline>
      <RouterProvider router={router} />
    </CssBaseline>
  );
}

export default AppRouter;
