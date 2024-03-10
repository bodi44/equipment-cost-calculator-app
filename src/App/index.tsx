import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Cost from '../pages/Cost';
import Speed from '../pages/Speed';
import Error from '../pages/Error';

const baseUrl = '/equipment-cost-calculator-app/';

const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <Navigate to={`${baseUrl}cost`} />,
    errorElement: <Error />,
    children: [],
  },
  {
    path: `${baseUrl}/cost`,
    element: <Cost />,
    errorElement: <Error />,
  },
  {
    path: `${baseUrl}/speed`,
    element: <Speed />,
    errorElement: <Error />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
