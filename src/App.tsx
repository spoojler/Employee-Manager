import { Box } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Calendar from './pages/Calendar';
import Dashboard from './pages/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
    },
    { path: 'calendar', element: <Calendar /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
