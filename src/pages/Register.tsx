/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Row, Typography } from "antd";
import { toast } from "sonner";
import { useSignupMutation } from "../redux/features/auth/authApi";
import { TSignUp } from "../types/users";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { SubmitHandler, FieldValues } from "react-hook-form";

const { Title, Text } = Typography;

export default function CreateUser() {
  const navigate = useNavigate();
  const [signup] = useSignupMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // Cast 'data' as TSignUp
    const signUpData = data as TSignUp;

    const toastId = toast.loading("Creating user account...");
    try {
      await signup(signUpData).unwrap();
      toast.success("User account has been created successfully!", {
        id: toastId,
        duration: 2000,
      });

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
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              <img
                src="https://i.ibb.co.com/tpWdH6mM/books-fotor-2025020321554.png"
                alt="BookStack Logo"
                style={{
                  height: "60px",
                  width: "60px",
                  objectFit: "contain",
                  marginRight: "12px",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                }}
              />
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#1890ff",
                  background:
                    "linear-gradient(90deg, #1890ff 0%, #52c41a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                BookStack
              </span>
            </Link>
            <Title
              level={3}
              style={{
                margin: "8px 0 0 0",
                color: "#2c3e50",
                fontWeight: 500,
                fontSize: "20px",
              }}
            >
              Welcome to Our BookStack Online Book Store
            </Title>
          </div>
          <PHForm onSubmit={onSubmit}>
            <PHInput label="Name" type="text" name="name" />
            <PHInput type="email" label="Email" name="email" />
            <PHInput type="password" name="password" label="Password" />
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
