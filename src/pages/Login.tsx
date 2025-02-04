/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, Col, Row, Typography } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const defaultValues = {
    email: "",
    password: "",
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
            Login
          </Title>
          <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
            <PHInput
              type="email"
              name="email"
              label="Email"
            />
            <PHInput
              type="password"
              name="password"
              label="Password"
            />
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{ marginTop: "15px" }}
            >
              Login
            </Button>
          </PHForm>
          <Text style={{ display: "block", marginTop: "10px" }}>
            <a
              onClick={() => navigate("/forgot-password")}
              style={{ color: "#1677ff", cursor: "pointer" }}
            >
              Forgot password?
            </a>
          </Text>
          <Text style={{ display: "block", marginTop: "10px" }}>
            Don't have an account?{" "}
            <a
              onClick={() => navigate("/register")}
              style={{ color: "#1677ff", cursor: "pointer" }}
            >
              Register here
            </a>
          </Text>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
