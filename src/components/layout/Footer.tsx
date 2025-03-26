import { Layout, Row, Col, Input, Button } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import ssl from "../../assets/ssl.png";

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

          {/* Newsletter Section */}
          <Col xs={24} md={12} lg={6}>
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>Newsletter</h3>
            <p style={{ color: "#bdc3c7", marginBottom: "20px" }}>
              Subscribe to receive updates, offers, and special deals!
            </p>
            <Input.Group compact>
              <Input
                style={{
                  width: "calc(100% - 80px)",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  padding: "10px 10px",
                }}
                placeholder="Enter your email"
              />
              <Button
                type="primary"
                style={{
                  borderRadius: "5px ",
                  marginTop: "6px",
                  background: "#00b96b",
                  border: "1px solid #00b96b",
                  padding: "10px 10px",
                }}
              >
                Subscribe
              </Button>
            </Input.Group>
          </Col>
        </Row>

        {/* Payment Methods Section */}
        <Row
          justify="center"
          style={{ marginTop: "40px", textAlign: "center" }}
        >
          <Col span={24}>
            <img
              src={ssl}
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
