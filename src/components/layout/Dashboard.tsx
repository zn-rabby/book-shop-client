import { Layout, Menu, Breadcrumb, Button, Row, Col } from "antd";
import {
  FaHistory,
  FaHome,
  FaList,
  FaUser,
  // FaUsers,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { RootState } from "../../redux/store";
import SubMenu from "antd/es/menu/SubMenu";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { AiFillProduct } from "react-icons/ai";
const { Header, Content, Sider } = Layout;
import { Typography } from "antd";

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
        <Row
          justify="center"
          align="middle"
          className="right-section"
          style={{ height: "80px" }}
        >
          <Col>
            <Typography.Title
              level={4}
              style={{
                color: "#00b96b",
                textAlign: "center",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              Dashboard
            </Typography.Title>
          </Col>
        </Row>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="5" icon={<FaHome />}>
            <Link to="/">Home</Link>
          </Menu.Item>

          {isAdmin && (
            <>
              {/* <Menu.Item key="01" icon={<FaHome />}>
                <Link to="/dashboard">Admin Home</Link>
              </Menu.Item> */}

              <SubMenu key="sub1" icon={<FaUser />} title="Mange User">
                <Menu.Item key="02">
                  <Link to="/dashboard/createUser">Create User</Link>
                </Menu.Item>
                <Menu.Item key="03">
                  <Link to="/dashboard/users">Manage Users</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub2"
                icon={<AiFillProduct />}
                title="Mange Product"
              >
                <Menu.Item key="12">
                  <Link to="/dashboard/createProduct">Create Product</Link>
                </Menu.Item>
                <Menu.Item key="13">
                  <Link to="/dashboard/products">Manage Manage</Link>
                </Menu.Item>
              </SubMenu>
              {/*  */}
              <SubMenu key="sub3" icon={<FaList />} title="Mange Order">
                <Menu.Item key="32">
                  <Link to="/dashboard/orders">Orders</Link>
                </Menu.Item>
              </SubMenu>

              {/* <Menu.Item key="3" icon={<FaList />}>
                <Link to="/dashboard/manageItem">Manage Items</Link>
              </Menu.Item> */}
            </>
          )}

          {isUser && (
            <>
              <Menu.Item key="1" icon={<FaHistory />}>
                <Link to="/dashboard/orderHistory">Orders History</Link>
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
          {/* <h2
            className="text-white"
            style={{
              textAlign: "center",
              color: "#00b96b",
              marginLeft: "16px",
            }}
          >
            Dashboard
          </h2> */}

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
              padding: 12,
              minHeight: 360,
              backgroundColor: "#fff",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
