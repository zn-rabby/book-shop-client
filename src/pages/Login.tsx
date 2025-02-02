import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location object to check the redirect path
  const dispatch = useAppDispatch();

  // Default values (Re-enabled)
  const defaultValues = {
    email: "", // Default to empty or a test email if needed
    password: "", // Default to empty
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      console.log(userInfo, "user info");

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.token) as TUser;
      dispatch(setUser({ user: user, token: res.data.token }));
      toast.success("Logged in", { id: toastId, duration: 2000 });

      // Get the previous location or default to "/" if not available
      const previousLocation = location.state?.from || "/"; // Default to homepage if no previous location exists

      // Navigate to the previous location (or the default route)
      navigate(previousLocation);
    } catch (err) {
      toast.error("Invalid credentials or something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="email" name="email" label="Email:" required />
        <PHInput type="password" name="password" label="Password" required />
        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </PHForm>
    </Row>
  );
};

export default Login;
