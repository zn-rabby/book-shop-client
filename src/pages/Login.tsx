import { Form, Input, Button, Checkbox, Row, Col, Card, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values: ", values);
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh", margin: 0 }}>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          title="Login"
          bordered={false}
          style={{
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form
            name="login"
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
                autoComplete="current-password"
              />
            </Form.Item>

            {/* Remember me */}
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
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
                Log in
              </Button>
            </Form.Item>

            {/* Forgot Password */}
            <Form.Item>
              <Space style={{ width: "100%", justifyContent: "space-between" }}>
                <Link to="/forgot-password">Forgot Password?</Link>
                <Link to="/register">Register</Link>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
