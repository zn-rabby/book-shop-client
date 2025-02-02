/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Typography } from "antd";
import { toast } from "sonner";
import { useSignupMutation } from "../redux/features/auth/authApi";
import { TSignUp } from "../types/users";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const { Title, Text } = Typography;

export default function CreateUser() {
  const navigate = useNavigate();
  const [signup] = useSignupMutation();

  const onSubmit = async (data: TSignUp) => {
    const toastId = toast.loading("Creating user account...");
    try {
      await signup(data).unwrap();
      toast.success("User account has been created successfully!", {
        id: toastId,
        duration: 2000,
      });

      // Redirect to login after successful registration
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err: any) {
      toast.error(
        err.data.message || "Registration failed. Please try again.",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", background: "#f5f5f5" }}
    >
      <Col xs={24} sm={18} md={12} lg={8} xl={6}>
        <Card
          style={{
            maxWidth: "400px",
            width: "100%",
            padding: "24px",
            margin: "0 auto",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            textAlign: "left",
          }}
        >
          <Title level={3} style={{ marginBottom: "20px" }}>
            Register
          </Title>
          <PHForm onSubmit={onSubmit}>
            <PHInput
              label="Name"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              rules={[{ required: true, message: "Please enter your name" }]}
              icon={<UserOutlined />}
            />
            <PHInput
              type="email"
              label="Email"
              name="email"
              placeholder="Enter Your Email"
              rules={[{ required: true, message: "Please enter your email" }]}
              icon={<MailOutlined />}
            />
            <PHInput
              type="password"
              name="password"
              label="Password"
              placeholder="Enter Your Password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
              icon={<LockOutlined />}
            />
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{ marginTop: "15px" }}
            >
              Register
            </Button>
          </PHForm>
          <Text style={{ display: "block", marginTop: "15px" }}>
            Already have an account?{" "}
            <a
              onClick={() => navigate("/login")}
              style={{ color: "#1677ff", cursor: "pointer" }}
            >
              Login here
            </a>
          </Text>
        </Card>
      </Col>
    </Row>
  );
}
