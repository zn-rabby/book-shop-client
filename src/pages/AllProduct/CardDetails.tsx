import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetAllBooksQuery } from "../../redux/features/book/bookManagement";
import { TProduct } from "../../types/bookManagement.type";
import { Card, Col, Row, Typography, Button, Space, notification } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addToCart } from "../../redux/features/cart/cartSlice"; // Importing addToCart action

const { Title, Text } = Typography;

const CardDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: books } = useGetAllBooksQuery(undefined);
  const book = books?.data?.find((book: TProduct) => book._id === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  const handleAddToCart = () => {
    // Dispatch addToCart action with book details
    dispatch(
      addToCart({
        id: book._id,
        name: book.title,
        price: book.price,
        image: book.image,
        quantity: 1,
        author: book.author,
      })
    );

    // Show success notification
    notification.success({
      message: "Added to Cart",
      description: `${book.title} has been added to your cart.`,
      placement: "bottomRight",
    });
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <Row gutter={[16, 16]} justify="center">
        {/* Left side: Book details */}
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            cover={<img alt={book.title} src={book.image} />}
            style={{
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <Title level={3}>{book.title}</Title>
            <Text type="secondary">{book.category}</Text>
            <Title level={4} style={{ color: "#ff4d4f", marginTop: "10px" }}>
              ${book.price}
            </Title>
            <Text style={{ fontSize: "16px", color: "#555" }}>
              {book.description}
            </Text>
            <Space
              style={{ marginTop: "20px" }}
              direction="vertical"
              size="middle"
            ></Space>{" "}
            <Button
              type="primary"
              style={{
                width: "100%",
                background: "#00b96b",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                padding: "12px",
                fontSize: "1rem",
                display: "flex",
                justifyContent: "center", // To align text and icon
                alignItems: "center", // To vertically align
              }}
              onClick={handleAddToCart} // Add to cart functionality
            >
              <span>Add to Cart</span>
              <ShoppingCartOutlined
                style={{ fontSize: "20px", marginLeft: "10px" }}
              />
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardDetails;
