import React from "react";
import { TProduct } from "../../types/bookManagement.type";
import { Card, Button, Rate } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface CartProps {
  book: TProduct;
}

const Cards: React.FC<CartProps> = ({ book }) => {
  return (
    <Card
      hoverable
      style={{
        borderRadius: "15px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
        transition: "transform 0.3s, box-shadow 0.3s",
        marginBottom: "20px",
      }}
      cover={
        <img
          alt={book.title}
          src={book.image}
          style={{
            height: "250px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "4px 4px 0 0",
          }}
        />
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <span style={{ fontStyle: "italic", color: "#95a5a6" }}>
          {book.author}
        </span>
        <div style={{ textAlign: "right" }}>
          <div
            style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#333" }}
          >
            ${book.price}
          </div>
          <Rate disabled value={4} />
        </div>
      </div>
      <p style={{ color: "#7f8c8d", margin: "10px 0", lineHeight: "1.5" }}>
        {book.description}
      </p>
      <Button
        type="primary"
        icon={<ShoppingCartOutlined />}
        style={{
          width: "100%",
          background: "#00b96b",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          padding: "12px",
          fontSize: "1rem",
        }}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default Cards;
