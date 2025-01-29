import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import AllProduct from "../pages/AllProduct/AllProduct";
import Checkout from "../pages/Checkout/Checkout";
import Dashboard from "../components/layout/Dashboard";
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
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      //   {
      //     path: "userHome",
      //     element: <UserHome></UserHome>,
      //   },
    ],
    // children: [
    //   // for normal user
    //   {
    //     path: "userHome",
    //     element: <UserHome></UserHome>,
    //   },
    //   {
    //     path: "cart",
    //     element: <Cart></Cart>,
    //   },
    //   {
    //     path: "payment",
    //     element: <Payment></Payment>,
    //   },
    //   {
    //     path: "history",
    //     element: <PaymentHistory></PaymentHistory>,
    //   },
    //   // for admin
    //   {
    //     path: "adminHome",
    //     element: <AdminHome></AdminHome>,
    //   },
    //   {
    //     path: "addItems",
    //     element: <AddItems></AddItems>,
    //   },
    //   {
    //     path: "manageItem",
    //     element: <ManageItems></ManageItems>,
    //   },
    //   {
    //     path: "updateItem/:id",
    //     element: <UpdateItem></UpdateItem>,
    //     loader: ({ params }) =>
    //       fetch(`https://bistroboss-server-silk.vercel.app/menu/${params.id}`),
    //   },
    //   {
    //     path: "users",
    //     element: <AllUsers></AllUsers>,
    //   },
    // ],
  },
]);

export default router;
