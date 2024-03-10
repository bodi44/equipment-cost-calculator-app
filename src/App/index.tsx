import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cost from '../pages/Cost';
import Speed from '../pages/Speed';
import Error from '../pages/Error';

const router = createBrowserRouter([
  { path: '/', errorElement: <Error /> },
  {
    path: '/cost',
    element: <Cost />,
    errorElement: <Error />,
  },
  {
    path: '/speed',
    element: <Speed />,
    errorElement: <Error />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
