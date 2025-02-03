import React from "react";
import { Result, Button, Space } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const Success = () => {
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
          <CheckCircleOutlined style={{ color: "#52c41a", fontSize: "48px" }} />
        }
        title="Payment Successful"
        subTitle="Your payment has been processed successfully. Thank you for your purchase!"
        extra={
          <Space>
            <Button
              type="primary"
              onClick={() => (window.location.href = "/")}
            >
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

export default Success;
