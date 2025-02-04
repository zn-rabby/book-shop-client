import React from "react";
import { Layout, Menu, Drawer, Button, Badge } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import logo from "../../assets/cc.png";

const { Header } = Layout;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  const dispatch = useAppDispatch();

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const isAuthenticated = useSelector((state: RootState) => state.auth.user);
  const cartItems = useSelector((state: RootState) => state.cart.items || []);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout>
      <Header className="navbar-header">
        <div className="navbar-container">
          <div className="logo">
            <div
              style={{
                display: "flex",
                color: "#00b96b",
              }}
            >
              <img
                src={logo}
                alt="Bookshop Logo"
                style={{ width: "50px", height: "50px", margin: "5px" }}
              />

              <p>BookStack</p>
            </div>
          </div>

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
          <div
            className="right-section"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
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

        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          open={drawerVisible}
        >
          <Menu mode="vertical" className="drawer-menu">
            <Menu.Item key="home" onClick={closeDrawer}>
              {" "}
              {/* Close drawer on click */}
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="product" onClick={closeDrawer}>
              <Link to="/product">Books</Link>
            </Menu.Item>
            <Menu.Item key="about" onClick={closeDrawer}>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="dashboard" onClick={closeDrawer}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="checkout" onClick={closeDrawer}>
              <Link to="/checkout">Checkout</Link>
            </Menu.Item>
            <Menu.Item key="services" onClick={closeDrawer}>
              <Link to="/services">Services</Link>
            </Menu.Item>
            <Menu.Item key="contact" onClick={closeDrawer}>
              <Link to="/contact">Contact</Link>
            </Menu.Item>

            <Menu.Item key="cart" className="cart-menu" onClick={closeDrawer}>
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

          <div className="drawer-footer">
            {isAuthenticated ? (
              <Button
                onClick={() => {
                  handleLogout();
                  closeDrawer();
                }}
                type="primary"
                block
              >
                {" "}
                {/* Close drawer after logout */}
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button type="primary" block onClick={closeDrawer}>
                  {" "}
                  {/* Close drawer after login navigation */}
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
