import React from "react";
import { Button, Typography, Tag, Card, Space, Row, Col } from "antd";
import {
  ExperimentOutlined,
  EditOutlined,
  CloudUploadOutlined,
  ReadOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const LiteraryInnovationSection: React.FC = () => {
  return (
    <section
      style={{
        background: "#F6FFED",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Space
          direction="vertical"
          size="large"
          style={{ width: "100%", textAlign: "center" }}
        >
          <Title
            level={2}
            style={{
              color: "#1d1d1f",
              fontSize: "2.8rem",
              margin: 0,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            The Future of <span style={{ color: "#00B96B" }}>Storytelling</span>{" "}
            is Here
          </Title>

          <Text
            style={{
              display: "block",
              fontSize: "1.1rem",
              color: "#666",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Discover how artificial intelligence is revolutionizing literary
            creation, offering writers and readers unprecedented possibilities.
          </Text>

          {/* Feature Cards */}
          <Row gutter={[30, 30]} style={{ margin: "60px 0" }}>
            {[
              {
                icon: (
                  <ReadOutlined
                    style={{ fontSize: "36px", color: "#00B96B" }}
                  />
                ),
                title: "Interactive Narratives",
                description:
                  "Dynamic stories that adapt to reader choices with intelligent branching plotlines and personalized outcomes.",
                badge: "Bestseller",
              },
              {
                icon: (
                  <EditOutlined
                    style={{ fontSize: "36px", color: "#00B96B" }}
                  />
                ),
                title: "AI Writing Assistant",
                description:
                  "Smart tools that suggest plot developments, character arcs, and stylistic improvements as you write.",
                badge: "New Release",
              },
              {
                icon: (
                  <CloudUploadOutlined
                    style={{ fontSize: "36px", color: "#00B96B" }}
                  />
                ),
                title: "Instant Publishing",
                description:
                  "Automated formatting, editing, and distribution pipelines that help authors publish faster.",
                badge: "Popular",
              },
            ].map((item, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  hoverable
                  style={{
                    borderRadius: "16px",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                    border: "none",
                    transition: "transform 0.3s",
                    height: "100%",
                  }}
                  bodyStyle={{ padding: "32px" }}
                >
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(0, 185, 107, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 24px",
                    }}
                  >
                    {item.icon}
                  </div>
                  {item.badge && (
                    <Tag
                      color="#00B96B"
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.badge}
                    </Tag>
                  )}
                  <Title
                    level={4}
                    style={{
                      color: "#1d1d1f",
                      marginBottom: "16px",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Title>
                  <Text
                    style={{
                      color: "#666",
                      fontSize: "1rem",
                      textAlign: "center",
                      display: "block",
                    }}
                  >
                    {item.description}
                  </Text>
                </Card>
              </Col>
            ))}
          </Row>

          <div style={{ marginTop: "40px" }}>
            <Button
              type="primary"
              size="large"
              icon={<ExperimentOutlined />}
              style={{
                backgroundColor: "#00B96B",
                borderColor: "#00B96B",
                padding: "0 40px",
                height: "56px",
                fontSize: "16px",
                fontWeight: 500,
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0, 185, 107, 0.3)",
              }}
            >
              Start Your AI Writing Journey
            </Button>
            <Text
              style={{
                display: "block",
                marginTop: "16px",
                color: "#666",
                fontSize: "0.9rem",
              }}
            >
              Trusted by 50,000+ writers worldwide
            </Text>
          </div>
        </Space>
      </div>
    </section>
  );
};

export default LiteraryInnovationSection;
