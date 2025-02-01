import { useSelector, useDispatch } from "react-redux";
import { Layout, Row, Col, Card, Button, Space, Image, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { RootState } from "../../redux/store";
import { removeFromCart } from "../../redux/features/cart/cartSlice";

// Define the type of your cart items
interface CartItem {
  id: string; // Assuming id is a string, change this if it's a different type
  name: string;
  price: number;
  quantity: number;
  image: string;
  author: string;
}

const { Content } = Layout;
const { Text, Title } = Typography;

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items || []); // ✅ Ensure it's always an array

  // Group items by ID to avoid duplicates
  const groupedItems = cartItems.reduce<{ [key: string]: CartItem }>(
    (acc, item) => {
      if (acc[item.id]) {
        acc[item.id].quantity += item.quantity; // Merge items with the same id by adding quantity
      } else {
        acc[item.id] = { ...item }; // Clone the item to add it to the accumulator
      }
      return acc;
    },
    {}
  ); // Explicitly define the type for the accumulator here

  const items = Object.values(groupedItems); // Convert grouped items object to an array

  const calculateTotal = (): number => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0); // Ensure it returns a number
  };

  return (
    <Layout>
      <Content style={{ padding: "20px", backgroundColor: "#f8f8f8" }}>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={16} md={12}>
            <Card title={`Your Cart (${items.length} Items)`}>
              {items.length > 0 ? (
                items.map((item) => (
                  <Row
                    key={item.id} // ✅ Make sure the key is unique
                    align="middle"
                    gutter={[16, 16]}
                    style={{ marginBottom: "15px" }}
                  >
                    <Col xs={4} sm={3}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                      />
                    </Col>
                    <Col xs={14} sm={16}>
                      <Title level={5} style={{ margin: 0 }}>
                        {item.name}
                      </Title>
                      <Text type="secondary">{item.author}</Text>
                    </Col>
                    <Col xs={4} sm={3} style={{ textAlign: "right" }}>
                      <Text strong>
                        {item.price} Tk x {item.quantity}
                      </Text>
                    </Col>
                    <Col xs={2} sm={2}>
                      <Button
                        icon={<DeleteOutlined />}
                        type="text"
                        danger
                        onClick={() => dispatch(removeFromCart(item.id))} // ✅ Use the correct item ID for removal
                      />
                    </Col>
                  </Row>
                ))
              ) : (
                <Text>No items in cart</Text> // ✅ Handle empty cart scenario
              )}
            </Card>
            <Card title="Checkout Summary" style={{ marginTop: "20px" }}>
              <Text>Total: {calculateTotal()} Tk</Text>
            </Card>
            <Space
              direction="vertical"
              style={{ width: "100%", marginTop: "20px" }}
            >
              <Button type="primary" size="large">
                Proceed to Checkout →
              </Button>
              <Button size="large">Order as a Gift</Button>
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Checkout;
