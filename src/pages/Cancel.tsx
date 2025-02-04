
import { Result, Button, Space } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const Cancel = () => {
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
        title="Payment Canceled"
        subTitle="Your payment has been canceled. If this was a mistake, you can try again."
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

export default Cancel;
