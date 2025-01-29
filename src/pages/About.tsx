import React from "react";
import { Typography, Row, Col, Card, Input, Button } from "antd";
import {
  BookOutlined,
  UsergroupAddOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const aboutContent = [
  {
    id: 1,
    icon: <BookOutlined style={{ fontSize: "40px", color: "#00b96b" }} />,
    title: "Our Mission",
    description:
      "At [Book Shop Name], we believe in the power of books to transform lives. Our mission is to provide a wide selection of books to cater to readers of all interests and ages.",
  },
  {
    id: 2,
    icon: (
      <UsergroupAddOutlined style={{ fontSize: "40px", color: "#00b96b" }} />
    ),
    title: "Our Values",
    description:
      "We value creativity, knowledge, and learning. Our goal is to offer our customers not just books, but an experience that nurtures curiosity and growth.",
  },
  {
    id: 3,
    icon: <PhoneOutlined style={{ fontSize: "40px", color: "#00b96b" }} />,
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
      style={{ padding: "60px 20px", background: "#f0f4f8" }}
    >
      {/* About Section */}
      <Title level={2} style={{ textAlign: "center", color: "#333" }}>
        About [Book Shop Name]
      </Title>

      <Paragraph
        style={{
          textAlign: "center",
          color: "#555",
          fontSize: "18px",
          maxWidth: "700px",
          margin: "auto",
        }}
      >
        Welcome to [Book Shop Name], your go-to destination for all things
        books. Our goal is to provide you with an exceptional shopping
        experience and a diverse selection of titles to ignite your passion for
        reading.
      </Paragraph>

      <Row gutter={[30, 30]} justify="center" style={{ marginBottom: "50px" }}>
        {aboutContent.map(({ id, icon, title, description }) => (
          <Col key={id} xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{
                textAlign: "center",
                borderRadius: "10px",
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
                background: "#ffffff",
                padding: "30px",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {icon}
              <Title level={4}>{title}</Title>
              <Paragraph>{description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Featured Books Section */}
      <div style={{ marginBottom: "50px", textAlign: "center" }}>
        <Title level={3} style={{ color: "#333" }}>
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
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
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
                  src="https://i.ibb.co.com/sRcVc1d/come.jpg"
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
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Contact Section */}
      <div style={{ marginBottom: "50px", textAlign: "center" }}>
        <Title level={3} style={{ color: "#333" }}>
          Contact Us
        </Title>
        <Paragraph
          style={{
            color: "#555",
            fontSize: "16px",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          We would love to hear from you! Whether you have questions,
          suggestions, or feedback, feel free to reach out to us.
        </Paragraph>

        <Row gutter={[16, 16]} justify="center">
          <Col
            xs={24}
            sm={20}
            md={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ width: "100%", maxWidth: "500px" }}>
              <Input
                placeholder="Your Name"
                style={{
                  marginBottom: "16px",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #00b96b",
                  fontSize: "14px",
                }}
              />
              <Input
                placeholder="Your Email"
                style={{
                  marginBottom: "16px",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #00b96b",
                  fontSize: "14px",
                }}
              />
              <Input.TextArea
                placeholder="Your Message"
                rows={4}
                style={{
                  marginBottom: "16px",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #00b96b",
                  fontSize: "14px",
                }}
              />
              <Button
                type="primary"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  padding: "12px",
                  fontWeight: "bold",
                  backgroundColor: "#00b96b",
                  border: "none",
                  fontSize: "16px",
                }}
              >
                Send Message
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Location Section */}
      {/* Google Map Embed */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "400px",
          marginBottom: "30px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8937006883317!2d90.37542421489724!3d23.763365484576953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7940f91d95f%3A0x13d99f48f67238d7!2sBook%20Shop%20Location!5e0!3m2!1sen!2sbd!4v1677519149351!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{
            border: "0",
            borderRadius: "10px",
          }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
