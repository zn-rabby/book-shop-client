import React from "react";
import { Row, Col, Input, Button, Typography, Space } from "antd";
import { MailOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Newsletter: React.FC = () => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f6ffed 0%, #f0fdf4 100%)",
        padding: "80px 0",
        borderTop: "1px solid rgba(0, 185, 107, 0.1)",
        borderBottom: "1px solid rgba(0, 185, 107, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <Row gutter={[48, 24]} align="middle">
          <Col xs={24} md={12}>
            <Space direction="vertical" size={16}>
              <Text
                strong
                style={{
                  color: "#00B96B",
                  fontSize: "14px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                Stay Connected
              </Text>
              <Title
                level={3}
                style={{
                  margin: 0,
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 700,
                  color: "#1a1a1a",
                }}
              >
                Get Exclusive Updates
              </Title>
              <Text
                style={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "#525252",
                }}
              >
                Subscribe to receive the latest book releases, special
                promotions, and literary news delivered straight to your inbox.
              </Text>
            </Space>
          </Col>

          <Col xs={24} md={12}>
            <Space direction="vertical" size={16} style={{ width: "100%" }}>
              <Input
                size="large"
                prefix={<MailOutlined style={{ color: "#a3a3a3" }} />}
                placeholder="Your email address"
                style={{
                  borderRadius: "8px",
                  padding: "12px 16px",
                  border: "1px solid #e5e5e5",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                }}
              />
              <Button
                type="primary"
                size="large"
                style={{
                  background: "#00B96B",
                  borderColor: "#00B96B",
                  borderRadius: "8px",
                  fontWeight: 500,
                  height: "48px",
                  fontSize: "16px",
                  boxShadow: "0 4px 12px rgba(0, 185, 107, 0.2)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                block
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
                Subscribe Now
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Newsletter;
