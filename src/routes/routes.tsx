import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import AllProduct from "../pages/AllProduct/AllProduct";
import Checkout from "../pages/Checkout/Checkout";
import Dashboard from "../components/layout/Dashboard";
import Login from "../pages/Login";
import RegisterPage from "../pages/Register";
import CardDetails from "../pages/AllProduct/CardDetails";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import CreateUser from "../pages/Dashboard/User/CreateUser";
import Users from "../pages/Dashboard/User/Users";
import CreateProduct from "../pages/Dashboard/Product/CreateProduct";
import Products from "../pages/Dashboard/Product/Products";
import ProductDetails from "../pages/Dashboard/Product/ProductDetails";
import UpdateProduct from "../pages/Dashboard/Product/UpdateProduct";
import Orders from "../pages/Dashboard/Orders/Orders";
import OrderHistory from "../pages/Dashboard/OrderHistory/OrderHistory";
import NotFound from "../pages/NotFound";
import Success from "../pages/Success";
import Fail from "../pages/Fail";
import Cancel from "../pages/Cancel";
import Contact from "../pages/Contact/Contact";

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
        path: "/pay-success",
        element: <Success></Success>,
      },
      {
        path: "/pay-fail",
        element: <Fail></Fail>,
      },
      {
        path: "/pay-cancel",
        element: <Cancel></Cancel>,
      },
      {
        path: "/product",
        element: <AllProduct />,
      },
      {
        path: "/product/:id",
        element: <CardDetails></CardDetails>,
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
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            {" "}
            <Checkout></Checkout>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),

    children: [
      {
        path: "/dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/dashboard/createUser",
        element: <CreateUser></CreateUser>,
      },
      {
        path: "/dashboard/users",
        element: <Users></Users>,
      },
      {
        path: "/dashboard/createProduct",
        element: <CreateProduct></CreateProduct>,
      },
      {
        path: "/dashboard/products",
        element: <Products></Products>,
      },
      {
        path: "/dashboard/products/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/dashboard/products/update/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/dashboard/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/dashboard/orderHistory",
        element: <OrderHistory></OrderHistory>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
