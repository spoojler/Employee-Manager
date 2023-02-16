import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Calendar from './pages/Calendar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
    },
    { path: 'calendar', element: <Calendar /> },
    { path: 'employees', element: <Employees /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
