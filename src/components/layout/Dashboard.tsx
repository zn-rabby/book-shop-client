import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaHospitalUser,
  FaList,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { RootState } from "../../redux/store";
import SubMenu from "antd/es/menu/SubMenu";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user, 1);

  const isAdmin = user?.role === "admin";
  const isUser = user?.role === "user";

  // Get user authentication state
  const isAuthenticated = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider width={250} theme="dark" collapsible>
        <div className="logo">
          <h4
            className="text-white text-center mt-8 text-xl font-bold mb-24"
            style={{ color: "#00b96b", marginBottom: "20px" }}
          >
            Dashboard
          </h4>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="5" icon={<FaHome />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<FaBook />}>
            <Link to="/product">Books</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<FaHospitalUser />}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Divider />
          {isAdmin && (
            <>
              <Menu.Item key="1" icon={<FaHome />}>
                <Link to="/dashboard">Admin Home</Link>
              </Menu.Item>

              <SubMenu key="sub1" icon={<FaUser />} title="Mange User">
                <Menu.Item key="2">
                  <Link to="/dashboard/createUser">Create User</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/dashboard/manageItems">Manage Items</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/dashboard/categories">Categories</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="3" icon={<FaList />}>
                <Link to="/dashboard/manageItem">Manage Items</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<FaBook />}>
                <Link to="/dashboard/bookings">Manage Bookings</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<FaUsers />}>
                <Link to="/dashboard/users">All Users</Link>
              </Menu.Item>
            </>
          )}

          {isUser && (
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
        </Menu>
      </Sider>

      {/* Main Layout */}
      <Layout>
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#001529",
          }}
        >
          <h2
            className="text-white"
            style={{
              textAlign: "center",
              color: "#00b96b",
              marginLeft: "16px",
            }}
          >
            Dashboard
          </h2>

          {/* Conditional Rendering for Login/Logout */}
          {isAuthenticated ? (
            <Button
              onClick={handleLogout}
              type="primary"
              style={{ fontWeight: "bold" }}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button type="primary" style={{ fontWeight: "bold" }}>
                Login
              </Button>
            </Link>
          )}
        </Header>

        {/* Content */}
        <Content style={{ padding: "16px" }}>
          <Breadcrumb style={{ marginBottom: "16px" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
              backgroundColor: "#fff",
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
