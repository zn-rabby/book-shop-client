import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import image from "../../assets/books.png";

const Banner = () => {
  return (
    <div
      style={{ padding: "50px 0px", margin: "20px 0px", background: "#f0f2f5" }}
    >
      <Row gutter={16} align="middle" className="reverse-xs">
        {/* Text Section */}
        <Col xs={24} md={12} style={{ padding: "20px" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            Welcome to Our Bookshop
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#7f8c8d",
              marginBottom: "20px",
            }}
          >
            "Dive into a world of endless stories and knowledge. Discover our
            wide collection of books across genres – from timeless classics to
            the latest bestsellers. Your next great read awaits!"
          </p>
          <Link to="/books">
            <Button
              type="primary"
              size="large"
              style={{ padding: "10px 20px", fontSize: "1rem" }}
            >
              Browse Books
            </Button>
          </Link>
        </Col>

        {/* Image Section */}
        <Col xs={24} md={12}>
          <img
            src={image}
            alt="Bookshop Banner"
            style={{
              width: "100%",
              //   borderRadius: "10px",
              //   boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
