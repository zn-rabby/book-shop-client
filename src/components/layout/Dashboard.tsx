import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Avatar,
  Dropdown,
  Typography,
  theme,
} from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import {
  DashboardOutlined,
  UserOutlined,
  TeamOutlined,
  ShoppingOutlined,
  OrderedListOutlined,
  HistoryOutlined,
  HomeOutlined,
  LogoutOutlined,
  SettingOutlined,
  PlusCircleOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useState } from "react";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();

  const isAdmin = user?.role === "admin";
  const isUser = user?.role === "user";

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Profile",
      onClick: () => navigate("/dashboard/profile"),
    },
    {
      key: "2",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      type: "divider",
    },
    {
      key: "3",
      icon: <LogoutOutlined />,
      label: "Logout",
      danger: true,
      onClick: handleLogout,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        width={250}
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          boxShadow: "2px 0 8px 0 rgba(29, 35, 41, 0.05)",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          }}
        >
          <Title
            level={4}
            style={{
              color: colorPrimary,
              margin: 0,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {collapsed ? "DB" : "Dashboard"}
          </Title>
        </div>

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ borderRight: 0 }}
        >
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>

          {isAdmin && (
            <>
              <Menu.SubMenu
                key="users"
                icon={<TeamOutlined />}
                title="User Management"
              >
                <Menu.Item key="create-user" icon={<PlusCircleOutlined />}>
                  <Link to="/dashboard/createUser">Create User</Link>
                </Menu.Item>
                <Menu.Item key="manage-users" icon={<TeamOutlined />}>
                  <Link to="/dashboard/users">All Users</Link>
                </Menu.Item>
              </Menu.SubMenu>

              <Menu.SubMenu
                key="products"
                icon={<ShoppingOutlined />}
                title="Product Management"
              >
                <Menu.Item key="create-product" icon={<PlusCircleOutlined />}>
                  <Link to="/dashboard/createProduct">Add Product</Link>
                </Menu.Item>
                <Menu.Item key="manage-products" icon={<ShoppingOutlined />}>
                  <Link to="/dashboard/products">All Products</Link>
                </Menu.Item>
              </Menu.SubMenu>

              <Menu.Item key="orders" icon={<OrderedListOutlined />}>
                <Link to="/dashboard/orders">Order Management</Link>
              </Menu.Item>
            </>
          )}

          {isUser && (
            <Menu.Item key="order-history" icon={<HistoryOutlined />}>
              <Link to="/dashboard/orderHistory">My Orders</Link>
            </Menu.Item>
          )}

          <Menu.Item key="profile" icon={<UserOutlined />}>
            <Link to="/dashboard/profile">My Profile</Link>
          </Menu.Item>

          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Back to Home</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Layout */}
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 250,
          transition: "all 0.2s",
        }}
      >
        <Header
          style={{
            padding: "0 24px",
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 1px 4px rgba(0, 21, 41, 0.08)",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />

          <Dropdown menu={{ items }} placement="bottomRight">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
              }}
            >
              <Avatar
                size="default"
                style={{ backgroundColor: colorPrimary }}
                icon={<UserOutlined />}
              />
              {!collapsed && (
                <div>
                  <Text strong style={{ display: "block" }}>
                    {user?.name}
                  </Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    {user?.role}
                  </Text>
                </div>
              )}
            </div>
          </Dropdown>
        </Header>

        {/* Content */}
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Breadcrumb style={{ marginBottom: 16 }}>
            <Breadcrumb.Item>
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>

          <div
            style={{
              padding: 24,
              minHeight: "calc(100vh - 180px)",
              background: colorBgContainer,
              borderRadius: 8,
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
