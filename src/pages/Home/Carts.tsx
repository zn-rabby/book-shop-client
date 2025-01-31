import React from "react";
import { TProduct } from "../../types/bookManagement.type";
import { Row, Col, Card, Button, Rate } from "antd";

import { ShoppingCartOutlined } from "@ant-design/icons";
// import { Meta } from "react-router-dom";

// Defining the props interface for the Cart component
interface CartProps {
  book: TProduct; // book will be of type TProduct
}

// Cart component definition with props
const Carts: React.FC<CartProps> = ({ book }) => {
  return (
    <div>
      <Card
        hoverable
        style={{
          borderRadius: "15px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
          transition: "transform 0.3s, box-shadow 0.3s",
          marginBottom: "20px",
        }}
        cover={
          <div style={{ position: "relative" }}>
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
          </div>
        }
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <div>
            {/* <Meta title={book.title} /> */}
            <span
              style={{
                fontStyle: "italic",
                color: "#95a5a6",
              }}
            >
              {book.author}
            </span>
          </div>

          {/* Right-aligned Price and Rating */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end", // Aligns both the price and rating to the right
              justifyContent: "center",
            }}
          >
            {/* Price */}
            <div
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              <span style={{ marginRight: "5px" }}>$</span>
              {book.price}
            </div>

            {/* Rating */}
            <div>
              <Rate disabled value={4} />
            </div>
          </div>
        </div>

        <p
          style={{
            color: "#7f8c8d",
            margin: "10px 0",
            lineHeight: "1.5",
          }}
        >
          {book.description}
        </p>

        {/* Add to Cart Button */}
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          style={{
            width: "100%", // Button takes full width
            background: "#00b96b",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            padding: "12px",
            fontSize: "1rem",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1abc9c")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#00b96b")}
        >
          Add to Cart
        </Button>
      </Card>
    </div>
  );
};

export default Carts;
