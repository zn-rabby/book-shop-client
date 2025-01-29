import { Row, Col, Card, Button, Tag, Rate } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import img from "../../assets/books.png";

const { Meta } = Card;

const Cart = () => {
  const cardData = [
    {
      title: "Book 1",
      author: "Author 1",
      price: 33,
      description:
        " Author Name follows Character Name on a transformative journey of love, loss, and self-discovery. A captivating story that inspires resilience and reflection through unexpected twists and deep emotions.",
      image: img,
    },
    {
      title: "Book 2",
      author: "Author 2",
      price: 25,
      description:
        " Author Name follows Character Name on a transformative journey of love, loss, and self-discovery. A captivating story that inspires resilience and reflection through unexpected twists and deep emotions.",
      image: img,
    },
    {
      title: "Book 3",
      author: "Author 3",
      price: 19,
      description:
        " Author Name follows Character Name on a transformative journey of love, loss, and self-discovery. A captivating story that inspires resilience and reflection through unexpected twists and deep emotions.",
      image: img,
    },
    {
      title: "Book 4",
      author: "Author 4",
      price: 45,
      description:
        " Author Name follows Character Name on a transformative journey of love, loss, and self-discovery. A captivating story that inspires resilience and reflection through unexpected twists and deep emotions.",
      image: img,
    },
    {
      title: "Book 5",
      author: "Author 5",
      price: 29,
      description:
        " Author Name follows Character Name on a transformative journey of love, loss, and self-discovery. A captivating story that inspires resilience and reflection through unexpected twists and deep emotions.",
      image: img,
    },
    {
      title: "Book 6",
      author: "Author 6",
      price: 39,
      description:
        " Author Name follows Character Name on a transformative journey of love, loss, and self-discovery. A captivating story that inspires resilience and reflection through unexpected twists and deep emotions.",
      image: img,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          margin: "40px 0", // Add top and bottom margin
          padding: "10px", // Add padding inside the heading
          color: "#333", // Set the text color
          textAlign: "center", // Center-align the text
          fontSize: "2rem", // Adjust font size if needed
          fontWeight: "600", // Make the font bold
        }}
      >
        Books Display
      </h2>

      <Row gutter={[16, 24]}>
        {cardData.map((book, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
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
                  <Meta title={book.title} />
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
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#1abc9c")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#00b96b")
                }
              >
                Add to Cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          type="primary"
          style={{
            backgroundColor: "#00b96b", // Button background color
            border: "none", // Remove button border
            borderRadius: "5px", // Round the corners
            padding: "10px 20px", // Padding for button size
            fontSize: "16px", // Font size of the button text
            fontWeight: "bold", // Make text bold
            transition: "background 0.3s", // Smooth background color transition
          }}
          onMouseEnter={
            (e) => (e.currentTarget.style.background = "#1abc9c") // Change background on hover
          }
          onMouseLeave={
            (e) => (e.currentTarget.style.background = "#00b96b") // Revert background color
          }
        >
          View All Books
        </Button>
      </div>
    </div>
  );
};

export default Cart;
