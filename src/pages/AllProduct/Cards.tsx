import React from "react";
import { useNavigate } from "react-router-dom";
import { TProduct } from "../../types/bookManagement.type";
import { Card, Button, Rate } from "antd";

interface CartProps {
  book: TProduct | undefined;
}

const Cards: React.FC<CartProps> = ({ book }) => {
  const navigate = useNavigate();

  if (!book) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>Loading...</div>
    ); // Centered loading message
  }

  const handleViewDetails = () => {
    navigate(`/book-details/${book._id}`);
  };

  return (
    <Card
      hoverable
      style={{
        borderRadius: "12px", // Slightly less rounded corners
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Softer shadow
        overflow: "hidden", // Ensure image doesn't overflow
      }}
      cover={
        <img
          alt={book.title}
          src={book.image}
          style={{
            height: "280px", // Slightly taller image
            width: "100%",
            objectFit: "cover",
            borderTopLeftRadius: "12px", // Match card border radius
            borderTopRightRadius: "12px",
          }}
        />
      }
    >
      <div style={{ padding: "12px" }}>
        {" "}
        {/* Add padding inside the card content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {" "}
          {/* Align items vertically */}
          <h4 style={{ margin: 0, fontWeight: 600 }}>{book.name}</h4>{" "}
          {/* Removed extra margin */}
          <span style={{ fontWeight: 500, color: "#2ecc71" }}>
            ${book.price}
          </span>{" "}
          {/* Nicer price color */}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          {" "}
          {/* Align items vertically, added margin */}
          <span style={{ fontStyle: "italic", color: "#7f8c8d" }}>
            {book.author}
          </span>
          <Rate style={{ fontSize: "14px" }} disabled value={4} />{" "}
          {/* Slightly larger star size */}
        </div>
        <p
          style={{
            color: "#555",
            margin: "0 0 16px 0",
            lineHeight: "1.6",
            fontSize: "14px",
          }}
        >
          {" "}
          {/* Improved description styling */}
          {book.description.length > 50
            ? book.description.slice(0, 50) + "..."
            : book.description}{" "}
          {/* Added ellipsis for longer descriptions */}
        </p>
        <Button
          type="primary"
          style={{
            width: "100%",
            backgroundColor: "#2ecc71", // Updated button color
            borderColor: "#2ecc71",
            borderRadius: "6px", // Slightly less rounded button
            fontWeight: 500, // Slightly less bold
            padding: "12px",
            fontSize: "15px", // Slightly bigger button text
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Added a subtle box shadow to the button
          }}
          onClick={handleViewDetails}
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default Cards;
