import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetAllBooksQuery } from "../../redux/features/book/bookManagement";
import { TProduct } from "../../types/bookManagement.type";
import {
  Card,
  Col,
  Row,
  Typography,
  Button,
  notification,
  Rate,
  Space,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addToCart } from "../../redux/features/cart/cartSlice";

const { Title, Text, Paragraph } = Typography;

const CardDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: books } = useGetAllBooksQuery(undefined);
  const book = books?.data?.find((book: TProduct) => book._id === id);

  if (!book) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>Book not found</div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: book._id,
        title: book.title,
        price: book.price,
        image: book.image,
        quantity: 1,
        author: book.author,
      })
    );

    notification.success({
      message: "Added to Cart",
      description: `${book.title} has been added to your cart.`,
      placement: "bottomRight",
      duration: 2,
    });
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#f8f8f8" }}>
      <Row justify="center" gutter={[24, 24]}>
        <Col xs={24} sm={16} md={12}>
          <Card
            cover={
              <img
                alt={book.title}
                src={book.image}
                style={{
                  height: "400px",
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
            }
            style={{
              borderRadius: "12px",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {" "}
              {/* Flex for price & rating */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: "18px",
                    color: "#2ecc71",
                    fontWeight: 500,
                  }}
                >
                  ${book.price}
                </Text>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Rate style={{ fontSize: "14px" }} disabled value={4} />
              </div>
            </div>
            <div style={{ padding: "24px" }}>
              <Title
                level={4}
                style={{ marginBottom: "10px", fontWeight: 600 }}
              >
                Name: {book.name}
              </Title>
              <Title
                level={5}
                style={{ marginBottom: "10px", fontWeight: 600 }}
              >
                Title: {book.title}
              </Title>

              <div style={{ marginBottom: "16px" }}>
                {" "}
                {/* Author below Title */}
                <Text type="secondary">Author: {book.author}</Text>
              </div>

              <Paragraph
                style={{
                  fontSize: "15px",
                  color: "#555",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                Description: {book.description}
              </Paragraph>

              <Button
                type="primary"
                style={{
                  width: "100%",
                  backgroundColor: "#2ecc71",
                  borderColor: "#2ecc71",
                  borderRadius: "8px",
                  fontWeight: 500,
                  padding: "14px",
                  fontSize: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                  marginTop: "20px", // Added margin top
                }}
                onClick={handleAddToCart}
              >
                <ShoppingCartOutlined
                  style={{ fontSize: "18px", marginRight: "8px" }}
                />
                <span>Add to Cart</span>
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardDetails;
