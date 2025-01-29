import React from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

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
            <Menu.Item key="services">
              <Link to="/services">Services</Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to="/contact">Contact</Link>
            </Menu.Item>
          </Menu>

          {/* Right Section: Login Button and Hamburger Icon */}
          <div className="right-section">
            {/* Login Button for Large Screens */}
            <Button type="primary" className="login-button">
              Login
            </Button>

            {/* Hamburger Icon for Small Screens */}
            <Button
              className="menu-button"
              type="primary"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            />
          </div>
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
              <Link to="/">Books</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="services">
              <Link to="/services">Services</Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to="/contact">Contact</Link>
            </Menu.Item>
          </Menu>

          {/* Login Button at the Bottom */}
          <div className="drawer-footer">
            <Button type="primary" block>
              Login
            </Button>
          </div>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
