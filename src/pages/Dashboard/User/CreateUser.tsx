/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row, Typography } from "antd";
import { toast } from "sonner";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { useSignupMutation } from "../../../redux/features/auth/authApi";
import { TSignUp } from "../../../types/users";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";

const { Title } = Typography;

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
          <Title level={3} style={{ marginBottom: "20px" }}>
            Create User
          </Title>
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
              Create User
            </Button>
          </PHForm>
        </Card>
      </Col>
    </Row>
  );
}
