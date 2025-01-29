import React from "react";
import { Form, Input, Button, Checkbox, Row, Col, Card, Space } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const onFinish = (values) => {
    console.log("Received values: ", values);
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh", margin: 0 }}>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          title="Register"
          bordered={false}
          style={{
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form
            name="register"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            {/* Username */}
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
                size="large"
                autoComplete="username"
              />
            </Form.Item>

            {/* Email */}
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your Email!" },
                { type: "email", message: "Please enter a valid Email!" },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                size="large"
                autoComplete="email"
              />
            </Form.Item>

            {/* Password */}
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
                autoComplete="new-password"
              />
            </Form.Item>

            {/* Confirm Password */}
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirm Password"
                size="large"
                autoComplete="new-password"
              />
            </Form.Item>

            {/* Terms & Conditions */}
            <Form.Item name="agree" valuePropName="checked">
              <Checkbox>
                I agree to the <a href="#">terms and conditions</a>
              </Checkbox>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                style={{ borderRadius: "4px" }}
              >
                Register
              </Button>
            </Form.Item>

            {/* Already have an account */}
            <Form.Item>
              <Space style={{ width: "100%", justifyContent: "space-between" }}>
                <Link to="/login">Already have an account? Login</Link>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterPage;
