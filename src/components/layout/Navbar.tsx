import { useState } from "react";
import {
  Layout,
  Menu,
  Drawer,
  Button,
  Badge,
  Space,
  Avatar,
  Typography,
  Divider,
  Dropdown,
} from "antd";
import { Link } from "react-router-dom";
import {
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  DownOutlined,
  DashboardOutlined,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import "./Navbar.css";

const { Header } = Layout;
const { Text } = Typography;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const dispatch = useAppDispatch();

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const isAuthenticated = useSelector((state: RootState) => state.auth.user);
  const cartItems = useSelector((state: RootState) => state.cart.items || []);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
    closeDrawer();
    setProfileDropdownVisible(false);
  };
  //   | 'fiction'
  //   | 'children'
  //   | 'science'
  //   | 'religion'
  //   | 'history'
  //   | 'biography'
  //   | 'romance'
  //   | 'mystery'
  //   | 'selfHelp'
  //   | 'politics'
  //   | 'business'
  //   | 'education';

  const booksMenuItems = [
    {
      key: "all-books",
      label: <Link to="/product">All Books</Link>,
    },
    {
      key: "fiction",
      label: <Link to="/product">Fiction</Link>,
    },
    {
      key: "children",
      label: <Link to="/product">Children</Link>,
    },
    {
      key: "science",
      label: <Link to="/product">Science</Link>,
    },
    {
      key: "history",
      label: <Link to="/product">History</Link>,
    },
    {
      key: "biography",
      label: <Link to="/product">Biography</Link>,
    },
    {
      key: "religion",
      label: <Link to="/product">Religion</Link>,
    },
    {
      key: "romance",
      label: <Link to="/product">Romance</Link>,
    },
    {
      key: "mystery",
      label: <Link to="/product">Mystery</Link>,
    },
    {
      key: "selfHelp",
      label: <Link to="/product">Self Help</Link>,
    },
    {
      key: "pcience",
      label: <Link to="/product">Politics</Link>,
    },
    {
      key: "business",
      label: <Link to="/product">Business</Link>,
    },
    {
      key: "education",
      label: <Link to="/product">Education</Link>,
    },
  ];

  const profileMenu = (
    <Menu
      onClick={() => setProfileDropdownVisible(false)}
      className="profile-dropdown-menu"
    >
      <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const navItems = [
    {
      key: "home",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "books",
      label: (
        <Dropdown
          menu={{ items: booksMenuItems }}
          placement="bottomLeft"
          arrow
          trigger={["hover"]}
        >
          <Space>
            Books
            <DownOutlined style={{ fontSize: 12 }} />
          </Space>
        </Dropdown>
      ),
    },
    {
      key: "about",
      label: <Link to="/about">About</Link>,
    },
    {
      key: "author",
      label: <Link to="/author">Author</Link>,
    },
    {
      key: "contact",
      label: <Link to="/contact">Contact</Link>,
    },
  ];

  // Mobile menu items
  const getMobileMenuItems = () => {
    const baseItems = [
      ...navItems.map((item) => {
        if (item.key === "books") {
          return {
            key: item.key,
            label: "Books",
            children: booksMenuItems,
          };
        }
        return item;
      }),
      {
        key: "checkout",
        label: (
          <Link to="/checkout">
            <Space>
              <ShoppingCartOutlined />
              Cart
              <Badge
                count={cartItemCount}
                showZero
                className="mobile-cart-badge"
              />
            </Space>
          </Link>
        ),
        className: "mobile-cart-item",
      },
    ];

    if (isAuthenticated) {
      return [
        ...baseItems,
        {
          key: "dashboard-mobile",
          label: <Link to="/dashboard">Dashboard</Link>,
          icon: <DashboardOutlined />,
        },
      ];
    }
    return baseItems;
  };

  return (
    <>
      {/* Top Contact Bar - Hidden on mobile */}
      <div className="top-contact-bar">
        <div className="top-contact-container">
          <Space size="large" split={<Divider type="vertical" />}>
            <Space>
              <PhoneOutlined className="contact-icon" />
              <Text className="contact-text">+880 1234 567890</Text>
            </Space>
            <Space>
              <MailOutlined className="contact-icon" />
              <Text className="contact-text">contact@bookstack.com</Text>
            </Space>
            <Space>
              <ClockCircleOutlined className="contact-icon" />
              <Text className="contact-text">Mon-Fri: 9AM - 5PM</Text>
            </Space>
          </Space>
        </div>
      </div>

      {/* Main Navbar */}
      <Header className="main-navbar">
        <div className="navbar-container">
          {/* Logo Section */}
          <Link to="/" className="logo-container">
            <img
              src={
                "https://i.ibb.co.com/tpWdH6mM/books-fotor-2025020321554.png"
              }
              alt="Bookshop Logo"
              className="logo-img"
            />
            <span className="logo-text">BookStack</span>
          </Link>

          {/* Desktop Menu */}
          <Menu
            mode="horizontal"
            className="desktop-menu"
            items={navItems}
            selectedKeys={[]}
          />

          {/* Right Section - Desktop */}
          <Space className="right-section" size="middle">
            <Link to="/checkout" className="cart-link">
              <Badge
                count={cartItemCount}
                showZero
                className="cart-badge"
                offset={[-5, 5]}
              >
                <ShoppingCartOutlined className="cart-icon" />
              </Badge>
            </Link>

            {isAuthenticated ? (
              <Dropdown
                overlay={profileMenu}
                trigger={["click"]}
                visible={profileDropdownVisible}
                onVisibleChange={(visible) =>
                  setProfileDropdownVisible(visible)
                }
                placement="bottomRight"
              >
                <Space className="">
                  <Avatar
                    icon={<UserOutlined />}
                    className="user-avatar"
                    src="https://res.cloudinary.com/daxjf1buu/image/upload/v1741228886/users_jauzzl.jpg"
                  />
                </Space>
              </Dropdown>
            ) : (
              <Link to="/login">
                <Button type="primary" className="login-button">
                  Login
                </Button>
              </Link>
            )}
          </Space>

          {/* Mobile Menu Button */}
          <Button
            className="mobile-menu-button"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            type="text"
          />
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title={
            <div className="drawer-header">
              <Link to="/" onClick={closeDrawer}>
                {/* <img src={logo} alt="Logo" className="drawer-logo" /> */}
                <span className="drawer-logo-text">BookStack</span>
              </Link>
            </div>
          }
          placement="right"
          onClose={closeDrawer}
          open={drawerVisible}
          className="mobile-drawer"
          width={280}
        >
          <Menu
            mode="vertical"
            className="drawer-menu"
            onClick={closeDrawer}
            items={getMobileMenuItems()}
          />

          <div className="drawer-footer">
            {isAuthenticated ? (
              <Button
                onClick={handleLogout}
                type="primary"
                block
                className="logout-button"
              >
                <LogoutOutlined /> Logout
              </Button>
            ) : (
              <Link to="/login" onClick={closeDrawer}>
                <Button type="primary" block className="logout-button">
                  <LoginOutlined /> Login
                </Button>
              </Link>
            )}
          </div>
        </Drawer>
      </Header>
    </>
  );
};

export default Navbar;
