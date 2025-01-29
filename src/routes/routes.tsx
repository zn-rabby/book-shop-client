import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import AllProduct from "../pages/AllProduct/AllProduct";
import Checkout from "../pages/Checkout/Checkout";
// import { adminPaths } from './admin.routes';
// import { routeGenerator } from '../utils/routesGenerator';
// import { facultyPaths } from './faculty.routes';
// import { studentPaths } from './student.routes';
// import ProtectedRoute from '../components/layout/ProtectedRoute';
// import ChangePassword from '../pages/ChangePassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <AllProduct />,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
  //   {
  //     path: '/admin',
  //     element: (
  //       <ProtectedRoute role="admin">
  //         <App />
  //       </ProtectedRoute>
  //     ),
  //     children: routeGenerator(adminPaths),
  //   },
  //   {
  //     path: '/faculty',
  //     element: (
  //       <ProtectedRoute role="faculty">
  //         <App />
  //       </ProtectedRoute>
  //     ),
  //     children: routeGenerator(facultyPaths),
  //   },
  //   {
  //     path: '/student',
  //     element: (
  //       <ProtectedRoute role="student">
  //         <App />
  //       </ProtectedRoute>
  //     ),
  //     children: routeGenerator(studentPaths),
  //   },

  {
    path: "/about",
    element: <About />,
  },
  //   {
  //     path: '/login',
  //     element: <Login />,
  //   },
  //   {
  //     path: '/change-password',
  //     element: <ChangePassword />,
  //   },
  //   {
  //     path: '/register',
  //     element: <Register />,
  //   },
]);

export default router;
