/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form, message, Card, Avatar, Row, Col } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const AdminDashboard = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  // console.log(user, "dashboard");

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    message.success("Profile updated successfully!");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    message.error("Failed to update profile.");
  };

  return (
    <Form
      form={form}
      name="profile_settings"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="horizontal"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Row gutter={20}>
        {/* Personal Information Card */}
        <Col xs={24} lg={12}>
          <Card
            title="Personal Information"
            bordered={false}
            style={{
              marginBottom: "20px",
              padding: "20px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* Profile Image */}
              <Avatar
                size={64}
                src={
                  "https://res.cloudinary.com/daxjf1buu/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1743350573/rabby_y54jos.jpg"
                }
                icon={<InboxOutlined />}
                style={{ marginRight: "20px" }}
              />
              {/* User Information */}
              <div>
                <h3 style={{ marginBottom: "8px" }}>Name: User</h3>
                <p style={{ margin: "0", fontWeight: "bold" }}>
                  Role: {user?.role}
                </p>
                <p style={{ margin: "0", color: "gray" }}>
                  Email: {user?.email}
                </p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default AdminDashboard;
