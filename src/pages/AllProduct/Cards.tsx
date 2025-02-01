import React from "react";
import { useDispatch } from "react-redux";
import { TProduct } from "../../types/bookManagement.type";
import { Card, Button, Rate } from "antd";
import { useNavigate } from "react-router-dom"; // Use useNavigate for navigation in React Router v6

interface CartProps {
  book: TProduct | undefined; // Allow book to be undefined
}

const Cards: React.FC<CartProps> = ({ book }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use navigate for routing in React Router v6

  // Check if book is undefined or missing properties
  if (!book) {
    return <div>Loading...</div>; // Display a loading message or spinner while the book data is loading
  }

  const handleViewDetails = () => {
    // Navigate to the book's details page
    navigate(`/book-details/${book._id}`); // Navigate to book details page
  };

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
        style={{
          width: "100%",
          background: "#00b96b",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          padding: "12px",
          fontSize: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleViewDetails} // On button click, view the details of the book
      >
        <span>View Details</span>
      </Button>
    </Card>
  );
};

export default Cards;
