import {
  Row,
  Col,
  Typography,
  Button,
  Divider,
  Space,
  Card,
  Input,
} from "antd";
import {
  BookOutlined,
  TeamOutlined,
  TrophyOutlined,
  StarOutlined,
  RocketOutlined,
  HeartOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const AboutPage = () => {
  return (
    <>
      <section style={{ marginBottom: "80px" }}>
        <div
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "120px 24px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Space direction="vertical" size="large">
            <Text
              strong
              style={{
                color: "#00B96B",
                fontSize: "16px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              WELCOME TO OUR STORY
            </Text>
            <Title
              level={1}
              style={{
                margin: 0,
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#fff",
              }}
            >
              Where Every Book Tells a Story
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Since 2023, we've been more than just a bookstore - we're a
              community hub for bibliophiles, a launchpad for local authors, and
              a sanctuary for those who cherish the written word.
            </Paragraph>
            <Space>
              <Button
                type="primary"
                size="large"
                style={{
                  height: "48px",
                  padding: "0 32px",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Explore Our Collection
              </Button>
              <Button
                type="default"
                size="large"
                style={{
                  height: "48px",
                  padding: "0 32px",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Meet Our Team
              </Button>
            </Space>
          </Space>
        </div>
      </section>
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 24px" }}>
        {/* Hero Banner */}

        {/* Our Journey */}
        <section style={{ marginBottom: "80px" }}>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <div
                style={{
                  height: "100%",
                  minHeight: "500px",
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "16px",
                }}
              />
            </Col>
            <Col xs={24} md={12}>
              <Space
                direction="vertical"
                size="large"
                style={{ padding: "0 24px" }}
              >
                <Text
                  strong
                  style={{
                    color: "#00B96B",
                    fontSize: "16px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  OUR JOURNEY
                </Text>
                <Title
                  level={2}
                  style={{
                    margin: 0,
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 700,
                  }}
                >
                  From Humble Beginnings to Literary Haven
                </Title>
                <Paragraph
                  style={{
                    fontSize: "16px",
                    color: "#525252",
                    lineHeight: 1.8,
                  }}
                >
                  What started as a small corner bookstore with just 200 titles
                  has blossomed into one of the region's most beloved literary
                  destinations. Our growth has been fueled by our passionate
                  community of readers who share our vision for a world enriched
                  by books.
                </Paragraph>
                <div
                  style={{
                    background: "#f9fbfd",
                    borderRadius: "12px",
                    padding: "24px",
                    borderLeft: "4px solid #00B96B",
                  }}
                >
                  <Text
                    strong
                    style={{
                      fontSize: "18px",
                      color: "#00B96B",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    "Books are the quietest and most constant of friends; they
                    are the most accessible and wisest of counselors, and the
                    most patient of teachers."
                  </Text>
                  <Text>- Charles W. Eliot</Text>
                </div>
              </Space>
            </Col>
          </Row>
        </section>

        {/* Core Values */}
        <section style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <Text
              strong
              style={{
                color: "#00B96B",
                fontSize: "16px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              OUR PROMISE
            </Text>
            <Title
              level={2}
              style={{
                margin: "16px 0",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 700,
              }}
            >
              The Bookworm Difference
            </Title>
            <Divider
              style={{
                width: "80px",
                height: "4px",
                background: "#00B96B",
                margin: "0 auto",
              }}
            />
          </div>

          <Row gutter={[24, 24]}>
            {[
              {
                icon: (
                  <BookOutlined
                    style={{ fontSize: "40px", color: "#00B96B" }}
                  />
                ),
                title: "Curated Selection",
                description:
                  "Each title in our store is handpicked by our team of bibliophiles to ensure quality and relevance.",
              },
              {
                icon: (
                  <TeamOutlined
                    style={{ fontSize: "40px", color: "#00B96B" }}
                  />
                ),
                title: "Community Hub",
                description:
                  "Weekly book clubs, author signings, and literary events that bring readers together.",
              },
              {
                icon: (
                  <TrophyOutlined
                    style={{ fontSize: "40px", color: "#00B96B" }}
                  />
                ),
                title: "Local Authors",
                description:
                  "We proudly showcase and promote talented writers from our community.",
              },
              {
                icon: (
                  <StarOutlined
                    style={{ fontSize: "40px", color: "#00B96B" }}
                  />
                ),
                title: "Personalized Service",
                description:
                  "Our staff provides tailored recommendations based on your reading preferences.",
              },
              {
                icon: (
                  <RocketOutlined
                    style={{ fontSize: "40px", color: "#00B96B" }}
                  />
                ),
                title: "Fast Delivery",
                description:
                  "Get your books delivered within 24 hours for local orders.",
              },
              {
                icon: (
                  <HeartOutlined
                    style={{ fontSize: "40px", color: "#00B96B" }}
                  />
                ),
                title: "Reading Programs",
                description:
                  "Special initiatives to encourage reading among children and young adults.",
              },
            ].map((value, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
                <Card
                  hoverable
                  style={{
                    borderRadius: "12px",
                    height: "100%",
                    border: "none",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                  }}
                  bodyStyle={{ padding: "32px" }}
                >
                  <Space
                    direction="vertical"
                    size="middle"
                    style={{ width: "100%" }}
                  >
                    {value.icon}
                    <Title level={4} style={{ margin: "16px 0 8px 0" }}>
                      {value.title}
                    </Title>
                    <Text style={{ color: "#666", lineHeight: 1.7 }}>
                      {value.description}
                    </Text>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Meet the Team */}
        <section style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <Text
              strong
              style={{
                color: "#00B96B",
                fontSize: "16px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              OUR TEAM
            </Text>
            <Title
              level={2}
              style={{
                margin: "16px 0",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 700,
              }}
            >
              The Faces Behind the Books
            </Title>
            <Paragraph
              style={{
                fontSize: "16px",
                color: "#525252",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Our passionate team of book lovers is always ready to help you
              discover your next favorite read.
            </Paragraph>
          </div>

          <Row gutter={[24, 48]} justify="center">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & Head Curator",
                bio: "With 15 years in the publishing industry, Sarah selects every title with care.",
                img: "https://i.pravatar.cc/300?img=31",
              },
              {
                name: "Michael Chen",
                role: "Community Manager",
                bio: "Organizes our popular book clubs and author events.",
                img: "https://i.pravatar.cc/300?img=32",
              },
              {
                name: "Amina Rahman",
                role: "Children's Specialist",
                bio: "Creates magical reading experiences for young readers.",
                img: "https://i.pravatar.cc/300?img=33",
              },
              {
                name: "David Wilson",
                role: "Logistics Coordinator",
                bio: "Ensures your books arrive quickly and in perfect condition.",
                img: "https://i.pravatar.cc/300?img=34",
              },
            ].map((member, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  style={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                    textAlign: "center",
                  }}
                  cover={
                    <div
                      style={{
                        height: "250px",
                        backgroundImage: `url(${member.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                      }}
                    />
                  }
                >
                  <Card.Meta
                    title={
                      <Text strong style={{ fontSize: "18px" }}>
                        {member.name}
                      </Text>
                    }
                    description={
                      <Space direction="vertical" size={4}>
                        <Text type="secondary">{member.role}</Text>
                        <Text style={{ color: "#525252", marginTop: "8px" }}>
                          {member.bio}
                        </Text>
                      </Space>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Store Info & CTA */}
        <section style={{ marginBottom: "80px" }}>
          <Row gutter={[48, 48]}>
            <Col xs={24} md={12}>
              <div
                style={{
                  background: "#00B96B",
                  borderRadius: "16px",
                  padding: "60px 40px",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <Space direction="vertical" size="large">
                  <Title level={3} style={{ color: "#fff", margin: 0 }}>
                    Visit Us Today
                  </Title>
                  <Space direction="vertical" size="middle">
                    <div
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "center",
                      }}
                    >
                      <EnvironmentOutlined style={{ fontSize: "24px" }} />
                      <Text style={{ color: "#fff", fontSize: "16px" }}>
                        123 Bookworm Lane, Literary District, Dhaka 1207
                      </Text>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "center",
                      }}
                    >
                      <PhoneOutlined style={{ fontSize: "24px" }} />
                      <Text style={{ color: "#fff", fontSize: "16px" }}>
                        +880 1234 567890
                      </Text>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "center",
                      }}
                    >
                      <MailOutlined style={{ fontSize: "24px" }} />
                      <Text style={{ color: "#fff", fontSize: "16px" }}>
                        hello@bookworm.com
                      </Text>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "center",
                      }}
                    >
                      <ClockCircleOutlined style={{ fontSize: "24px" }} />
                      <Text style={{ color: "#fff", fontSize: "16px" }}>
                        Open Daily: 9AM - 9PM
                      </Text>
                    </div>
                  </Space>
                  <Button
                    type="default"
                    size="large"
                    style={{
                      width: "100%",
                      height: "48px",
                      fontWeight: 500,
                      fontSize: "16px",
                      marginTop: "24px",
                    }}
                  >
                    Get Directions
                  </Button>
                </Space>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div
                style={{
                  background: "#f9fbfd",
                  borderRadius: "16px",
                  padding: "60px 40px",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%" }}
                >
                  <Title level={3} style={{ margin: 0 }}>
                    Join Our Reading Revolution
                  </Title>
                  <Paragraph style={{ fontSize: "16px", color: "#525252" }}>
                    Sign up for our newsletter to receive exclusive content,
                    early access to new arrivals, and members-only discounts.
                  </Paragraph>
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Input
                      placeholder="Your email address"
                      size="large"
                      style={{
                        borderRadius: "8px",
                        padding: "12px 16px",
                      }}
                    />
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        width: "100%",
                        height: "48px",
                        fontWeight: 500,
                        fontSize: "16px",
                      }}
                    >
                      Subscribe Now
                    </Button>
                  </Space>
                </Space>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
