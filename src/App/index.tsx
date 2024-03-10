import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Cost from '../pages/Cost';
import Speed from '../pages/Speed';
import Error from '../pages/Error';
import { AppLayout } from '../layouts/AppLayout';
import { APP_ROUTES, BASE_URL } from '../constants.ts';

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: APP_ROUTES.costPage,
        element: <Cost />,
        errorElement: <Error />,
      },
      {
        path: APP_ROUTES.speedPage,
        element: <Speed />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={APP_ROUTES.costPage} />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
