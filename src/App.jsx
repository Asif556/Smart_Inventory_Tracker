
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Components/Landing';
import Features from './Components/Features';
import Additems from './Components/Additems';
import Display from './Components/Display';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import Retrive from './Components/Retrive';
import FreshnessCheck from './Components/FreshnessCheck';
import ProtectedRoute from './Components/ProtectedRoute';
import Predict_Price from './Components/Predict_Price';
import About from './Components/About';

function App() {
  const r = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path:'/about',
      element:<About/>

    },
    {
      path:'/predict',
      element:<Predict_Price/>
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/Main',
      element: (
        <ProtectedRoute>
          <Landing />
        </ProtectedRoute>
      ),
    },
    {
      path: '/check',
      element: (
        <ProtectedRoute>
          <FreshnessCheck />
        </ProtectedRoute>
      ),
    },
    {
      path: '/retrive',
      element: (
        <ProtectedRoute>
          <Retrive />
        </ProtectedRoute>
      ),
    },
    {
      path: '/features',
      element: (
        <ProtectedRoute>
          <Features />
        </ProtectedRoute>
      ),
    },
    {
      path: '/additems',
      element: (
        <ProtectedRoute>
          <Additems />
        </ProtectedRoute>
      ),
    },
    {
      path: '/display',
      element: (
        <ProtectedRoute>
          <Display />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={r} />;
}

export default App;
