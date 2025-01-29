import {
  Layout,
  Menu,
  Breadcrumb,
  Avatar,
  Dropdown,
  Space,
  Button,
} from "antd";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaGripHorizontal,
  FaHome,
  FaList,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const isAdmin = true;
  //   const isUser = true;

  const userMenu = (
    <Menu>
      <Menu.Item key="1" icon={<FaAd />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider width={250} theme="dark" collapsible>
        <div className="logo">
          <h4
            className="text-white text-center mt-8 text-xl font-bold"
            style={{ color: "#00b96b" }}
          >
            ###
          </h4>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="text-white text-center mt-16 text-xl font-bold"
        >
          {isAdmin ? (
            <>
              <Menu.Item key="1" icon={<FaHome />}>
                <Link to="/dashboard/adminHome">Admin Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<FaUtensils />}>
                <Link to="/dashboard/addItems">Add Items</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<FaList />}>
                <Link to="/dashboard/manageItem">Manage Item</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<FaBook />}>
                <Link to="/dashboard/bookings">Manage Bookings</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<FaUsers />}>
                <Link to="/dashboard/users">All Users</Link>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="1" icon={<FaHome />}>
                <Link to="/dashboard/userHome">User Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<FaCalendar />}>
                <Link to="/dashboard/history">Payment History</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<FaAd />}>
                <Link to="/dashboard/review">Add Review</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<FaList />}>
                <Link to="/dashboard/bookings">My Bookings</Link>
              </Menu.Item>
            </>
          )}
          <Menu.Divider />
          <Menu.Item key="5" icon={<FaHome />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<FaGripHorizontal />}>
            <Link to="/order/salad">Menu</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<FaEnvelope />}>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Layout */}
      <Layout style={{ padding: "0 " }}>
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#001529", // Dark theme header
          }}
        >
          <div className="logo">
            <h2
              className="text-white "
              style={{ textAlign: "center", color: "#00b96b" }}
            >
              Dashboard
            </h2>
          </div>

          <Button style={{ width: "60px" }} type="primary" block>
            Login
          </Button>
        </Header>

        {/* Content */}
        <Content style={{ padding: "0 0px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
              backgroundColor: "#fff", // White background for content
            }}
          >
            <Outlet />
          </div>
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center", backgroundColor: "#f0f2f5" }}>
          E-Commerce Dashboard ©2025 Created by Your Company
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
