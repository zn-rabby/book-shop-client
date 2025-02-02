import  { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  message,
  Card,
  Avatar,
  Row,
  Col,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Dragger } = Upload;

const AdminDashboard = () => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState("");

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleUploadChange = ({ fileList }) => {
    if (fileList.length > 0) {
      setImageUrl("https://via.placeholder.com/150");
    } else {
      setImageUrl("");
    }
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    message.success("Profile updated successfully!");
  };

  const onFinishFailed = (errorInfo) => {
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
                src={imageUrl || "https://via.placeholder.com/150"}
                icon={!imageUrl && <InboxOutlined />}
                style={{ marginRight: "20px" }}
              />
              {/* User Information */}
              <div>
                <h3 style={{ marginBottom: "8px" }}>John Doe</h3>
                <p style={{ margin: "0", fontWeight: "bold" }}>Role: User</p>
                <p style={{ margin: "0", color: "gray" }}>
                  Email: johndoe@gmail.com
                </p>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          {/* Profile Settings */}
          <h2>Profile Settings</h2>
          <Form.Item label="Profile Picture">
            <Dragger
              name="avatar"
              normFile={normFile}
              onChange={handleUploadChange}
              listType="picture-card"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
            {imageUrl && (
              <img
                src={imageUrl}
                alt="avatar"
                style={{ width: "100px", marginTop: "10px" }}
              />
            )}
          </Form.Item>
          <Form.Item label="Current Password" name="current_password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="New Password" name="new_password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Confirm New Password" name="confirm_new_password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Language" name="language" initialValue="en">
            <Select>
              <Option value="en">English</Option>
              <Option value="bn">Bengali</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Theme" name="theme" initialValue="light">
            <Select>
              <Option value="light">Light</Option>
              <Option value="dark">Dark</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdminDashboard;
