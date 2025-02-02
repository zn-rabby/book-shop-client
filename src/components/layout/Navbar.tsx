import React from "react";
import { Layout, Menu, Drawer, Button, Badge } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header } = Layout;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  const dispatch = useAppDispatch();

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  // Get user authentication state
  const isAuthenticated = useSelector((state: RootState) => state.auth.user);

  // Get cart item count
  const cartItems = useSelector((state: RootState) => state.cart.items || []);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout>
      <Header className="navbar-header">
        <div className="navbar-container">
          <div className="logo">Books</div>

          <Menu mode="horizontal" className="menu">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="product">
              <Link to="/product">Books</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="dashboard">
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
          </Menu>

          <div className="right-section">
            <Link to="/checkout" className="cart-icon">
              <Badge
                count={cartItemCount}
                showZero
                style={{ backgroundColor: "#ff4d4f" }}
              >
                <ShoppingCartOutlined
                  style={{ fontSize: "24px", color: "#333" }}
                />
              </Badge>
            </Link>

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
          </div>

          <Button
            className="menu-button"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            type="text"
            style={{ fontSize: "24px", color: "#333" }}
          />
        </div>

        {/* Drawer Menu for Mobile */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          open={drawerVisible}
        >
          <Menu mode="vertical" className="drawer-menu">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="product">
              <Link to="/product">Books</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="checkout">
              <Link to="/checkout">Checkout</Link>
            </Menu.Item>
            <Menu.Item key="services">
              <Link to="/services">Services</Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to="/contact">Contact</Link>
            </Menu.Item>
            <Menu.Item key="cart" className="cart-menu">
              <Link to="/checkout">
                <Badge
                  count={cartItemCount}
                  showZero
                  style={{ backgroundColor: "#ff4d4f" }}
                >
                  <ShoppingCartOutlined
                    style={{ fontSize: "24px", color: "#333" }}
                  />
                </Badge>
              </Link>
            </Menu.Item>
          </Menu>

          {/* Conditional Rendering for Login/Logout in Drawer */}
          <div className="drawer-footer">
            {isAuthenticated ? (
              <Button onClick={handleLogout} type="primary" block>
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button type="primary" block>
                  Login
                </Button>
              </Link>
            )}
          </div>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
