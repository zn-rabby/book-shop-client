import {
  Form,
  Input,
  Button,
  Typography,
  Card,
  Divider,
  Space,
  Row,
  Col,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  SendOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

export default function Contact() {
  return (
    <>
      <section style={{ marginBottom: "80px" }}>
        <div
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')",
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
              CONNECT WITH US
            </Text>
            <Title
              level={1}
              style={{
                margin: 0,
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#fff",
              }}
            >
              We'd Love to Hear From You
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Whether you have a question, need recommendations, or want to
              collaborate, our team is here to assist you.
            </Paragraph>
          </Space>
        </div>
      </section>

      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 24px" }}>
        {/* Contact Form & Info */}
        <section style={{ marginBottom: "80px" }}>
          <Row gutter={[48, 48]}>
            <Col xs={24} md={12}>
              <Card
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  border: "none",
                }}
                bodyStyle={{ padding: "40px" }}
              >
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%" }}
                >
                  <Title
                    level={3}
                    style={{
                      margin: 0,
                      color: "#333",
                      fontWeight: 600,
                    }}
                  >
                    Send Us a Message
                  </Title>
                  <Text
                    type="secondary"
                    style={{ display: "block", marginBottom: "24px" }}
                  >
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </Text>

                  <Form layout="vertical">
                    <Form.Item
                      name="name"
                      rules={[
                        { required: true, message: "Please enter your name!" },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Your Name"
                        style={{
                          padding: "12px 16px",
                          borderRadius: "8px",
                          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please enter your email!" },
                        { type: "email", message: "Enter a valid email!" },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Your Email"
                        style={{
                          padding: "12px 16px",
                          borderRadius: "8px",
                          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="subject"
                      rules={[
                        { required: true, message: "Please enter a subject!" },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Subject"
                        style={{
                          padding: "12px 16px",
                          borderRadius: "8px",
                          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your message!",
                        },
                      ]}
                    >
                      <Input.TextArea
                        size="large"
                        rows={6}
                        placeholder="Your Message"
                        style={{
                          padding: "12px 16px",
                          borderRadius: "8px",
                          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                    </Form.Item>
                    <Button
                      type="primary"
                      size="large"
                      htmlType="submit"
                      style={{
                        height: "48px",
                        width: "100%",
                        fontWeight: 500,
                        fontSize: "16px",
                        background: "#00B96B",
                        borderColor: "#00B96B",
                        borderRadius: "8px",
                      }}
                      icon={<SendOutlined />}
                    >
                      Send Message
                    </Button>
                  </Form>
                </Space>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  border: "none",
                }}
                bodyStyle={{ padding: "40px" }}
              >
                <Title
                  level={3}
                  style={{
                    margin: 0,
                    color: "#333",
                    fontWeight: 600,
                    marginBottom: "24px",
                  }}
                >
                  Contact Information
                </Title>

                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: "100%" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <MailOutlined
                      style={{ fontSize: "24px", color: "#00B96B" }}
                    />
                    <div>
                      <Text
                        strong
                        style={{ display: "block", marginBottom: "4px" }}
                      >
                        Email
                      </Text>
                      <Text>contact@greenleaf.com</Text>
                      <Text>support@greenleaf.com</Text>
                    </div>
                  </div>

                  <Divider
                    style={{ margin: "16px 0", borderColor: "#f0f0f0" }}
                  />

                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <PhoneOutlined
                      style={{ fontSize: "24px", color: "#00B96B" }}
                    />
                    <div>
                      <Text
                        strong
                        style={{ display: "block", marginBottom: "4px" }}
                      >
                        Phone
                      </Text>
                      <Text>+880 1234 567 890</Text>
                      <Text>+880 9876 543 210</Text>
                    </div>
                  </div>

                  <Divider
                    style={{ margin: "16px 0", borderColor: "#f0f0f0" }}
                  />

                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <EnvironmentOutlined
                      style={{ fontSize: "24px", color: "#00B96B" }}
                    />
                    <div>
                      <Text
                        strong
                        style={{ display: "block", marginBottom: "4px" }}
                      >
                        Address
                      </Text>
                      <Text>123 Book Street, Dhaka 1207</Text>
                      <Text>Bangladesh</Text>
                    </div>
                  </div>

                  <Divider
                    style={{ margin: "16px 0", borderColor: "#f0f0f0" }}
                  />

                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <ClockCircleOutlined
                      style={{ fontSize: "24px", color: "#00B96B" }}
                    />
                    <div>
                      <Text
                        strong
                        style={{ display: "block", marginBottom: "4px" }}
                      >
                        Opening Hours
                      </Text>
                      <Text>Monday - Friday: 9AM - 8PM</Text>
                      <Text>Saturday - Sunday: 10AM - 6PM</Text>
                    </div>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Map Section */}
        <section style={{ marginBottom: "80px" }}>
          <Card
            style={{
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              border: "none",
              overflow: "hidden",
            }}
            bodyStyle={{ padding: 0 }}
          >
            <iframe
              style={{
                width: "100%",
                height: "500px",
                border: "none",
                display: "block",
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9020606622146!2d90.39119231498292!3d23.75086629464533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89b1a4d93a5%3A0x4f30c91a3ad27f74!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1635769025784!5m2!1sen!2sbd"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </Card>
        </section>
      </div>
    </>
  );
}
