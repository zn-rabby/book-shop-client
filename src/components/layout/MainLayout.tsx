import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BookshopFooter from "./Footer";

const MainLayout = () => {


  return (
    <Layout style={{ height: "100%" }}>
      {/* <Sidebar /> */}
      <Navbar></Navbar>
      <div className="your-class">
        <Outlet />
      </div>
      <BookshopFooter></BookshopFooter>
     
    </Layout>
  );
};

export default MainLayout;
