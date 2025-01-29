import { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  InputNumber,
  Typography,
  Divider,
  Button,
  Space,
  Image,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Text, Title } = Typography;

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);
  const product = {
    name: "Englishe Oti Durbolder jonno Spoken Fighter",
    author: "Rahat Khan",
    price: 470,
    image: "product_image.jpg", // Replace with your image URL
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const calculateTotal = () => {
    return product.price * quantity + 48;
  };

  return (
    <Layout>
      <Content style={{ padding: "20px", backgroundColor: "#f8f8f8" }}>
        {" "}
        {/* Light background */}
        <Row gutter={[24, 24]} justify="center">
          {" "}
          {/* Center the content */}
          <Col xs={24} sm={16} md={12}>
            {" "}
            {/* Responsive columns */}
            <Card
              title={
                <Space>
                  ✔ Select All ({quantity} Item{quantity > 1 ? "s" : ""}){" "}
                  {/* Dynamic item count */}
                  <span style={{ color: "#888" }}>
                    your total: {calculateTotal()} Tk.
                  </span>
                </Space>
              }
            >
              <Row align="middle" gutter={[16, 16]}>
                {" "}
                {/* Consistent spacing */}
                <Col xs={4} sm={3}>
                  <Image
                    src="https://i.ibb.co.com/sRcVc1d/come.jpg"
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    preview={false} // Disable image preview on click
                  />
                </Col>
                <Col xs={16} sm={18}>
                  <Title level={4} style={{ margin: 0 }}>
                    {product.name}
                  </Title>{" "}
                  {/* Larger title */}
                  <Text type="secondary">{product.author}</Text>
                </Col>
                <Col xs={4} sm={3} style={{ textAlign: "right" }}>
                  <InputNumber
                    min={1}
                    value={quantity}
                    onChange={handleQuantityChange}
                    style={{ width: "100%" }} // InputNumber width
                  />
                </Col>
              </Row>
              <Divider />
              <Row justify="end">
                <Col>
                  <Button
                    icon={<DeleteOutlined />}
                    type="text"
                    danger // Make the delete button red
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card>
            <div style={{ marginTop: "20px" }}>
              {" "}
              {/* Spacing between cards */}
              <Card title="Checkout Summary">
                {/* ... (Summary content remains the same) */}
              </Card>
            </div>
            <div style={{ marginTop: "20px" }}>
              {" "}
              {/* Spacing between cards */}
              <Space direction="vertical" style={{ width: "100%" }}>
                {" "}
                {/* Full width buttons */}
                <Button type="primary" size="large">
                  {" "}
                  {/* Larger button */}
                  Proceed to Checkout →
                </Button>
                <Button size="large">Order as a Gift</Button>
                <div
                  style={{
                    textAlign: "center",
                    color: "#888",
                    fontSize: "14px",
                  }}
                >
                  Apply Promo Code or Voucher Code on the Shipping Page
                </div>
              </Space>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Checkout;
