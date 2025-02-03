import { useSelector, useDispatch } from "react-redux";
import { Layout, Row, Col, Card, Button, Space, Image, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { RootState } from "../../redux/store";
import { removeFromCart, clearCart } from "../../redux/features/cart/cartSlice";
import { useAddOrderMutation } from "../../redux/features/order/orderApi";

interface CartItem {
  id: string;
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
  const cartItems = useSelector((state: RootState) => state.cart.items || []);
  const [addOrder, { isLoading }] = useAddOrderMutation(); // ✅ Redux API mutation

  const groupedItems = cartItems.reduce<{ [key: string]: CartItem }>(
    (acc, item) => {
      if (acc[item.id]) {
        acc[item.id].quantity += item.quantity;
      } else {
        acc[item.id] = { ...item };
      }
      return acc;
    },
    {}
  );

  const items = Object.values(groupedItems);

  const calculateTotal = (): number => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      const orderData = {
        userId: "67667005127a16ef726212af", // ✅ ব্যবহারকারীর আইডি যুক্ত করুন (ডায়নামিক করলে ভালো হয়)
        product: items[0].id, // ✅ ব্যাকএন্ড একক `product` ফিল্ড আশা করে, তাই প্রথম প্রোডাক্ট পাঠানো হচ্ছে
        quantity: items[0].quantity,
        total_amount: calculateTotal(),
        paymentMethod: "sslCommerz", // ✅ পেমেন্ট মেথড সেট করুন
        paymentStatus: "pending",
        shippingAddress: {
          name: "home",
          phone: "1234567890",
          address: "123 Main Street, Apartment 4B",
          postalCode: "12345",
          city: "Dhaka",
          country: "Bangladesh",
          isDeleted: false,
        },
        status: "pending",
        orderDate: new Date().toISOString(),
        transactionId: "abcd1234efgh5678", 
      };

      console.log("Sending Order Data:", orderData);

      const response = await addOrder(orderData).unwrap();
      console.log("Order placed successfully:", response);

      if (response.success) {
        dispatch(clearCart()); 
        // alert("Order placed successfully!");
      } else {
        alert(response.message || "Order placement failed.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
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
                    key={item.id}
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
                        onClick={() => dispatch(removeFromCart(item.id))}
                      />
                    </Col>
                  </Row>
                ))
              ) : (
                <Text>No items in cart</Text>
              )}
            </Card>
            <Card title="Checkout Summary" style={{ marginTop: "20px" }}>
              <Text>Total: {calculateTotal()} Tk</Text>
            </Card>
            <Space
              direction="vertical"
              style={{ width: "100%", marginTop: "20px" }}
            >
              <Button
                type="primary"
                size="large"
                onClick={handleCheckout}
                loading={isLoading}
              >
                Proceed to Checkout →
              </Button>
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Checkout;
