import { Layout, Row, Col } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const BookshopFooter = () => {
  return (
    <Footer
      style={{ background: "#1A2A3A", color: "#fff", padding: "40px 20px" }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
        <Row gutter={[32, 32]}>
          {/* About Section */}
          <Col xs={24} md={12} lg={6}>
            {/* Logo */}
            <img
              src="https://i.ibb.co.com/tpWdH6mM/books-fotor-2025020321554.png"
              alt="Bookshop Logo"
              style={{ width: "80px", marginBottom: "20px" }}
            />

            {/* Heading */}
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>About Us</h3>

            {/* Description */}
            <p style={{ color: "#bdc3c7", lineHeight: "1.8" }}>
              Welcome to [Bookshop Name], your one-stop destination for books,
              stationery, and more. Discover timeless classics, bestsellers, and
              personalized recommendations!
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col xs={24} md={12} lg={6}>
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0, color: "#bdc3c7" }}>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="/about"
                  style={{ color: "#bdc3c7", textDecoration: "none" }}
                >
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="/contact"
                  style={{ color: "#bdc3c7", textDecoration: "none" }}
                >
                  Contact Us
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="/faq"
                  style={{ color: "#bdc3c7", textDecoration: "none" }}
                >
                  FAQs
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="/privacy"
                  style={{ color: "#bdc3c7", textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col xs={24} md={12} lg={6}>
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>Contact Us</h3>
            <p style={{ color: "#bdc3c7" }}>
              <EnvironmentOutlined style={{ marginRight: "8px" }} /> 123
              Bookshop Street, City, Country
            </p>
            <p style={{ color: "#bdc3c7" }}>
              <PhoneOutlined style={{ marginRight: "8px" }} /> +123 456 789
            </p>
            <p style={{ color: "#bdc3c7" }}>
              <MailOutlined style={{ marginRight: "8px" }} />{" "}
              support@bookshop.com
            </p>
          </Col>

          {/* Social Media Section */}
          <Col xs={24} md={12} lg={6}>
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>Follow Us</h3>
            <p style={{ color: "#bdc3c7", marginBottom: "20px" }}>
              Stay connected through our social media platforms.
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#bdc3c7", fontSize: "24px" }}
              >
                <FacebookOutlined />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#bdc3c7", fontSize: "24px" }}
              >
                <TwitterOutlined />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#bdc3c7", fontSize: "24px" }}
              >
                <InstagramOutlined />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#bdc3c7", fontSize: "24px" }}
              >
                <LinkedinOutlined />
              </a>
            </div>
          </Col>
        </Row>

        {/* Payment Methods Section */}
        <Row
          justify="center"
          style={{ marginTop: "40px", textAlign: "center" }}
        >
          <Col span={24}>
            <img
              src={
                "https://res.cloudinary.com/daxjf1buu/image/upload/v1742999275/ssl_khpnpm.png"
              }
              alt="Payment Methods"
              style={{ width: "100%", maxWidth: "800px" }}
            />
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default BookshopFooter;
