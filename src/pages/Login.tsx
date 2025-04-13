/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, Col, Row, Typography, Space } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const defaultUserValues = {
    email: "user10@gmail.com",
    password: "user10",
  };

  const defaultAdminValues = {
    email: "user0@gmail.com",
    password: "user0",
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Logging in...");

    try {
      const userInfo = { email: data.email, password: data.password };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.token) as TUser;

      dispatch(setUser({ user: user, token: res.data.token }));
      toast.success("Logged in successfully!", { id: toastId, duration: 2000 });

      const previousLocation = location.state?.from || "/";
      navigate(previousLocation);
    } catch (err) {
      toast.error("Invalid credentials or something went wrong.", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  const handleQuickLogin = (values: { email: string; password: string }) => {
    return async () => {
      const toastId = toast.loading("Logging in...");
      try {
        const res = await login(values).unwrap();
        const user = verifyToken(res.data.token) as TUser;
        dispatch(setUser({ user: user, token: res.data.token }));
        toast.success("Logged in successfully!", {
          id: toastId,
          duration: 2000,
        });
        navigate(location.state?.from || "/");
      } catch (err) {
        toast.error("Login failed", { id: toastId, duration: 2000 });
      }
    };
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", background: "#f5f5f5" }}
    >
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <Card
          style={{
            maxWidth: "500px",
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
          <Space
            direction="horizontal"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              margin: "16px 0",
            }}
          >
            <Button
              type="primary"
              onClick={handleQuickLogin(defaultUserValues)}
              style={{
                height: "48px",
                width: "120px",
                background: "#1890ff",
                borderColor: "#1890ff",
                fontSize: "16px",
                fontWeight: 500,
                borderRadius: "8px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#40a9ff";
                e.currentTarget.style.borderColor = "#40a9ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1890ff";
                e.currentTarget.style.borderColor = "#1890ff";
              }}
            >
              User
            </Button>
            <Button
              type="primary"
              onClick={handleQuickLogin(defaultAdminValues)}
              style={{
                height: "48px",
                width: "120px",
                background: "#52c41a",
                borderColor: "#52c41a",
                fontSize: "16px",
                fontWeight: 500,
                borderRadius: "8px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#73d13d";
                e.currentTarget.style.borderColor = "#73d13d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#52c41a";
                e.currentTarget.style.borderColor = "#52c41a";
              }}
            >
              Admin
            </Button>
          </Space>

          <PHForm onSubmit={onSubmit}>
            <PHInput type="email" name="email" label="Email" />
            <PHInput type="password" name="password" label="Password" />
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{ marginTop: "15px", height: "42px" }}
            >
              Login
            </Button>
          </PHForm>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <Text>
              Don't have an account?{" "}
              <a
                onClick={() => navigate("/register")}
                style={{ color: "#1677ff", cursor: "pointer" }}
              >
                Register here
              </a>
            </Text>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
