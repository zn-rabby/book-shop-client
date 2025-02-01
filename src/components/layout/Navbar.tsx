import React from "react";
import { Layout, Menu, Drawer, Button, Badge } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store"; // Assuming you're using redux and RootState is configured

const { Header } = Layout;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  // Get cart item count from Redux store (assuming 'cart' state exists)
  const cartItems = useSelector((state: RootState) => state.cart.items || []);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Layout>
      <Header className="navbar-header">
        <div className="navbar-container">
          {/* Left Logo */}
          <div className="logo">Books</div>

          {/* Centered Menu for Large Screens */}
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

          {/* Right Section: Login Button and Cart Icon */}
          <div className="right-section">
            {/* Cart Icon with Dynamic Item Count (Visible on Large Screens Only) */}
            <Link to="/checkout" className="cart-icon">
              <Badge
                count={cartItemCount} // Dynamic item count
                showZero // Show '0' if there are no items
                style={{
                  backgroundColor: "#ff4d4f", // Red color for the badge
                  boxShadow: "0 0 0 2px white", // Optional: add some white border to the badge
                }}
              >
                <ShoppingCartOutlined
                  style={{
                    fontSize: "24px", // Icon size
                    color: "#333", // Icon color
                  }}
                />
              </Badge>
            </Link>

            {/* Login Button */}
            <Link to="/login">
              <Button
                type="primary"
                className="login-button"
                style={{
                  fontWeight: "bold", // Optional: bold text for emphasis
                  padding: "8px 16px", // Padding for button size
                }}
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Hamburger Menu Icon for Small Screens */}
          <Button
            className="menu-button"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            type="text"
            style={{
              fontSize: "24px", // Adjust the hamburger icon size
              color: "#333", // Icon color
            }}
          />
        </div>

        {/* Drawer Menu for Small Screens */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          visible={drawerVisible}
          bodyStyle={{ padding: 0, display: "flex", flexDirection: "column" }}
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
            {/* Cart Icon inside Drawer for Mobile */}
            <Menu.Item key="cart" className="cart-menu">
              <Link to="/checkout">
                <Badge
                  count={cartItemCount}
                  showZero
                  style={{
                    backgroundColor: "#ff4d4f",
                    boxShadow: "0 0 0 2px white",
                  }}
                >
                  <ShoppingCartOutlined
                    style={{
                      fontSize: "24px",
                      color: "#333",
                    }}
                  />
                </Badge>
              </Link>
            </Menu.Item>
          </Menu>

          {/* Login Button at the Bottom */}
          <div className="drawer-footer">
            <Link to="/login">
              <Button type="primary" block>
                Login
              </Button>
            </Link>
          </div>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
