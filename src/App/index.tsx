import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Cost from '../pages/Cost';
import Speed from '../pages/Speed';
import Error from '../pages/Error';
import { AppLayout } from '../layouts/AppLayout';

const baseUrl = process.env.NODE_ENV === 'production' ? '/equipment-cost-calculator-app' : '';

const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: `/cost`,
        element: <Cost />,
        errorElement: <Error />,
      },
      {
        path: `/speed`,
        element: <Speed />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={`${baseUrl}/cost`} />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
