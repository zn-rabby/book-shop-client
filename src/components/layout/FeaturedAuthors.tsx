import React from "react";
import { Card, Avatar, Typography, Button, Space, Row, Col } from "antd";
import { BookOutlined, ArrowRightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const featuredAuthors = [
  {
    id: 1,
    name: "Tahmima Anam",
    genre: "Fiction, Historical",
    books: 12,
    avatar: "https://i.pravatar.cc/150?img=11",
    bio: "Award-winning Bangladeshi-British writer and novelist.",
    featuredBook: "A Golden Age",
  },
  {
    id: 2,
    name: "Humayun Ahmed",
    genre: "Fiction, Drama",
    books: 200,
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Legendary Bangladeshi author and filmmaker.",
    featuredBook: "Nondito Noroke",
  },
  {
    id: 3,
    name: "Jhumpa Lahiri",
    genre: "Literary Fiction",
    books: 8,
    avatar: "https://i.pravatar.cc/150?img=13",
    bio: "Pulitzer Prize-winning author of Indian origin.",
    featuredBook: "The Namesake",
  },
  {
    id: 4,
    name: "Zia Haider Rahman",
    genre: "Literary Fiction",
    books: 1,
    avatar: "https://i.pravatar.cc/150?img=14",
    bio: "British Bangladeshi novelist and international speaker.",
    featuredBook: "In the Light of What We Know",
  },
];

const FeaturedAuthors: React.FC = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#f9fbfd",
        borderTop: "1px solid rgba(0, 0, 0, 0.05)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        {/* Centered Header Section */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <Text
            strong
            style={{
              color: "#00B96B",
              fontSize: "16px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              display: "inline-block",
              marginBottom: "12px",
            }}
          >
            Meet The Creators
          </Text>
          <Title
            level={2}
            style={{
              margin: 0,
              fontSize: "clamp(28px, 3vw, 38px)",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.3,
            }}
          >
            Our Featured Authors
          </Title>
        </div>

        {/* Authors Grid */}
        <Row gutter={[24, 32]} justify="center">
          {featuredAuthors.map((author) => (
            <Col key={author.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                  height: "100%",
                  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                }}
                bodyStyle={{ padding: "24px" }}
              >
                <Space
                  direction="vertical"
                  size={16}
                  align="center"
                  style={{ width: "100%" }}
                >
                  <Avatar
                    src={author.avatar}
                    size={100}
                    style={{
                      border: "3px solid #00B96B",
                      boxShadow: "0 4px 12px rgba(0, 185, 107, 0.2)",
                    }}
                  />
                  <div>
                    <Title
                      level={4}
                      style={{
                        margin: 0,
                        textAlign: "center",
                        color: "#1a1a1a",
                        fontWeight: 600,
                      }}
                    >
                      {author.name}
                    </Title>
                    <Text
                      type="secondary"
                      style={{
                        textAlign: "center",
                        display: "block",
                        fontSize: "14px",
                        marginTop: "4px",
                      }}
                    >
                      {author.genre}
                    </Text>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      margin: "8px 0",
                    }}
                  >
                    <BookOutlined style={{ color: "#00B96B" }} />
                    <Text>
                      {author.books} {author.books > 1 ? "Books" : "Book"}
                    </Text>
                  </div>

                  <Text
                    style={{
                      textAlign: "center",
                      color: "#525252",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      minHeight: "60px",
                    }}
                  >
                    "{author.bio}"
                  </Text>

                  <Text
                    strong
                    style={{
                      color: "#00B96B",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    Featured: {author.featuredBook}
                  </Text>

                  <Button
                    type="text"
                    style={{
                      color: "#00B96B",
                      fontWeight: 500,
                      padding: "0 8px",
                      marginTop: "8px",
                    }}
                  >
                    View All Works <ArrowRightOutlined />
                  </Button>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CTA Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "48px",
          }}
        >
          <Button
            type="primary"
            size="large"
            style={{
              background: "#00B96B",
              borderColor: "#00B96B",
              borderRadius: "8px",
              fontWeight: 500,
              padding: "0 40px",
              height: "48px",
              fontSize: "16px",
              boxShadow: "0 4px 12px rgba(0, 185, 107, 0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00a05a";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(0, 185, 107, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#00B96B";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0, 185, 107, 0.2)";
            }}
          >
            Browse All Authors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuthors;
