import { Row, Col, Typography, Button } from "antd";
import {
  SmileOutlined,
  DollarOutlined,
  RocketOutlined,
} from "@ant-design/icons"; // Ant Design Icons

const { Title, Paragraph } = Typography;

const AboutPage = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Hero Section */}
      <Row
        align="middle"
        style={{
          background: "#f0f2f5",
          padding: "0",
          borderRadius: "8px",
          marginBottom: "40px",
          width: "100%",
          height: "500px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Col xs={24} md={24}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src="https://i.ibb.co.com/xS1JK1FJ/fs.jpg" // Replace with your image
              alt="Bookshop"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                textAlign: "center",
                zIndex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "40px",
                borderRadius: "8px",
                width: "80%",
                maxWidth: "600px",
              }}
            >
              <Title
                style={{
                  fontSize: "2.5rem",
                  color: "#fff",
                  marginBottom: "20px",
                }}
              >
                Welcome to Our Bookshop
              </Title>
              <Paragraph
                style={{
                  fontSize: "1.1rem",
                  color: "#fff",
                  marginBottom: "30px",
                }}
              >
                Discover a world of books that inspire, educate, and entertain.
              </Paragraph>
              <Button
                type="primary"
                size="large"
                style={{ fontWeight: "bold" }}
              >
                Explore Our Collection
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      {/* Our Story Section */}
      <Row style={{ marginBottom: "60px", padding: "0 20px" }}>
        <Col xs={24}>
          <Title
            level={2}
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#333",
              fontWeight: 600,
            }}
          >
            Our Story
          </Title>
          <Paragraph
            style={{
              fontSize: "1.1rem",
              textAlign: "center",
              color: "#666",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Founded in 2023, our bookshop started as a small passion project.
            Over the years, we have grown into a trusted destination for book
            lovers, offering a curated selection of titles across genres.
          </Paragraph>
        </Col>
      </Row>

      {/* Our Mission Section */}
      <Row
        style={{
          background: "#f0f2f5",
          padding: "60px 20px",
          borderRadius: "8px",
          marginBottom: "60px",
        }}
      >
        <Col xs={24}>
          <Title
            level={2}
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#333",
              fontWeight: 600,
            }}
          >
            Our Mission
          </Title>
          <Paragraph
            style={{
              fontSize: "1.1rem",
              textAlign: "center",
              color: "#666",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Our mission is to promote a love for reading by providing
            high-quality books, exceptional customer service, and a welcoming
            community for readers of all ages.
          </Paragraph>
        </Col>
      </Row>

      {/* Why Choose Us Section */}
      <Row
        gutter={[16, 16]}
        style={{
          marginBottom: "60px",
          padding: "60px 20px",
          borderRadius: "12px",
        }}
      >
        <Col xs={24}>
          <Title
            level={2}
            style={{
              textAlign: "center",
              marginBottom: "40px",
              color: "#333",
              fontWeight: 600,
            }}
          >
            Why Choose Us?
          </Title>
        </Col>

        <Col xs={24} md={8} style={{ marginBottom: "30px" }}>
          <div
            style={{
              textAlign: "center",
              padding: "30px",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              border: "1px solid #f0f2f5",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <SmileOutlined
              style={{
                fontSize: "48px",
                color: "#00b96b",
                marginBottom: "20px",
              }}
            />
            <Title level={4} style={{ color: "#00b96b", marginBottom: "15px" }}>
              Curated Selection
            </Title>
            <Paragraph
              style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.6 }}
            >
              We handpick every book to ensure quality and relevance for our
              readers.
            </Paragraph>
          </div>
        </Col>

        <Col xs={24} md={8} style={{ marginBottom: "30px" }}>
          <div
            style={{
              textAlign: "center",
              padding: "30px",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              border: "1px solid #f0f2f5",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <DollarOutlined
              style={{
                fontSize: "48px",
                color: "#00b96b",
                marginBottom: "20px",
              }}
            />
            <Title level={4} style={{ color: "#00b96b", marginBottom: "15px" }}>
              Affordable Prices
            </Title>
            <Paragraph
              style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.6 }}
            >
              Enjoy great books at prices that won't break the bank.
            </Paragraph>
          </div>
        </Col>

        <Col xs={24} md={8} style={{ marginBottom: "30px" }}>
          <div
            style={{
              textAlign: "center",
              padding: "30px",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              border: "1px solid #f0f2f5",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <RocketOutlined
              style={{
                fontSize: "48px",
                color: "#00b96b",
                marginBottom: "20px",
              }}
            />
            <Title level={4} style={{ color: "#00b96b", marginBottom: "15px" }}>
              Fast Delivery
            </Title>
            <Paragraph
              style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.6 }}
            >
              Get your books delivered quickly and securely to your doorstep.
            </Paragraph>
          </div>
        </Col>
      </Row>

      {/* Call to Action Section */}
      <Row
        style={{
          background: "#00b96b",
          padding: "60px 20px",
          borderRadius: "8px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <Col xs={24}>
          <Title level={2} style={{ color: "#fff", marginBottom: "20px" }}>
            Ready to Explore?
          </Title>
          <Paragraph
            style={{ fontSize: "1.1rem", color: "#fff", marginBottom: "30px" }}
          >
            Start your reading journey today with our extensive collection of
            books.
          </Paragraph>
          <Button type="default" size="large" style={{ fontWeight: "bold" }}>
            Shop Now
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AboutPage;
