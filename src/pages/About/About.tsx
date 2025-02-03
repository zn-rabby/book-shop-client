import React from "react";
import { Typography, Row, Col, Card, Button, Input, Divider } from "antd";
import {
  BookOutlined,
  UsergroupAddOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const aboutContent = [
  {
    id: 1,
    icon: <BookOutlined style={{ fontSize: "40px", color: "#1890ff" }} />,
    title: "Our Mission",
    description:
      "At [Book Shop Name], we believe in the power of books to transform lives. Our mission is to provide a wide selection of books to cater to readers of all interests and ages.",
  },
  {
    id: 2,
    icon: (
      <UsergroupAddOutlined style={{ fontSize: "40px", color: "#1890ff" }} />
    ),
    title: "Our Values",
    description:
      "We value creativity, knowledge, and learning. Our goal is to offer our customers not just books, but an experience that nurtures curiosity and growth.",
  },
  {
    id: 3,
    icon: <PhoneOutlined style={{ fontSize: "40px", color: "#1890ff" }} />,
    title: "Customer Support",
    description:
      "We are committed to offering exceptional customer service. Whether you need assistance with book selection or shipping, our friendly team is here to help.",
  },
];

// Featured Books Section Data
const featuredBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://via.placeholder.com/150",
  },
];

const About: React.FC = () => {
  return (
    <div
      className="home"
      style={{ padding: "60px 20px", background: "#f4f7fc" }}
    >
      {/* About Section */}
      <Title
        level={2}
        style={{ textAlign: "center", color: "#333", fontWeight: "600" }}
      >
        About [Book Shop Name]
      </Title>

      <Paragraph
        style={{
          textAlign: "center",
          color: "#555",
          fontSize: "18px",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        Welcome to [Book Shop Name], your go-to destination for all things
        books. We strive to provide you with a diverse selection of books that
        ignite your passion for reading and make your shopping experience truly
        unforgettable.
      </Paragraph>

      {/* About Content Cards */}
      <Row gutter={[30, 30]} justify="center" style={{ marginBottom: "50px" }}>
        {aboutContent.map(({ id, icon, title, description }) => (
          <Col key={id} xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{
                textAlign: "center",
                borderRadius: "10px",
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
                background: "#ffffff",
                padding: "30px",
                transition: "transform 0.3s ease-in-out",
                border: "1px solid #f0f0f0",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {icon}
              <Title level={4} style={{ color: "#1890ff", marginTop: "20px" }}>
                {title}
              </Title>
              <Paragraph style={{ fontSize: "16px", color: "#555" }}>
                {description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Featured Books Section */}
      <div style={{ marginBottom: "50px", textAlign: "center" }}>
        <Title level={3} style={{ color: "#333", fontWeight: "600" }}>
          Featured Books
        </Title>

        <Row gutter={[16, 16]} justify="center">
          {featuredBooks.map(({ id, title, author, image }) => (
            <Col key={id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
                  background: "#ffffff",
                  padding: "20px",
                  transition: "transform 0.3s ease-in-out",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={image}
                  alt={title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    objectFit: "cover", // Ensure the image covers the space properly
                  }}
                />
                <div style={{ marginTop: "16px" }}>
                  <Title level={4} style={{ color: "#333", margin: "0" }}>
                    {title}
                  </Title>
                  <Paragraph style={{ fontStyle: "italic", color: "#777" }}>
                    {author}
                  </Paragraph>
                  <Button
                    type="primary"
                    style={{
                      marginTop: "12px",
                      borderRadius: "4px",
                      width: "100%",
                      background: "#1890ff",
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Search Bar */}
      <Divider />
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Title level={3} style={{ color: "#1890ff" }}>
          Find Your Next Favorite Book
        </Title>
        <Input.Search
          placeholder="Search books by title, author, or genre"
          enterButton="Search"
          size="large"
          style={{
            width: "80%",
            maxWidth: "600px",
            margin: "0 auto",
            borderRadius: "5px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </div>
  );
};

export default About;
