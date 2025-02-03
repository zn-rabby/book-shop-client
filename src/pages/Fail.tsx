import { Result, Button, Space } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const Fail = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f7f7f7",
        padding: "20px",
      }}
    >
      <Result
        icon={
          <CloseCircleOutlined style={{ color: "#f5222d", fontSize: "48px" }} />
        }
        title="Payment Failed"
        subTitle="Unfortunately, your payment could not be processed. Please try again or contact support."
        extra={
          <Space>
            <Button type="primary" onClick={() => (window.location.href = "/")}>
              Go to Home
            </Button>
          </Space>
        }
        style={{
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "40px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
};

export default Fail;
