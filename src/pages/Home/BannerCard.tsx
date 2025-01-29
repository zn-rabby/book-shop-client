import { Row, Col, Card } from "antd";
import { SmileOutlined, HeartOutlined, BookOutlined } from "@ant-design/icons";

const BannerCard = () => {
  const cardStyle = {
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    padding: "20px",
    transition: "transform 0.3s",
  };

  const iconStyle = {
    fontSize: "30px",
    color: "#00b96b",
    marginRight: "10px",
  };

  const contentStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  return (
    <Row gutter={[24, 24]} justify="center" style={{ padding: "20px" }}>
      {/* Card 1 */}
      <Col xs={24} md={12} lg={8}>
        <Card
          hoverable
          style={cardStyle}
          bodyStyle={{ padding: "20px" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div style={contentStyle}>
            <SmileOutlined style={iconStyle} />
            <h3 style={{ fontWeight: "bold", margin: 0 }}>Exciting Offers</h3>
          </div>
          <p style={{ color: "#595959" }}>
            Get 20% off on your first purchase of books. Discover amazing deals!
          </p>
        </Card>
      </Col>

      {/* Card 2 */}
      <Col xs={24} md={12} lg={8}>
        <Card
          hoverable
          style={cardStyle}
          bodyStyle={{ padding: "20px" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div style={contentStyle}>
            <HeartOutlined style={iconStyle} />
            <h3 style={{ fontWeight: "bold", margin: 0 }}>Bestsellers</h3>
          </div>
          <p style={{ color: "#595959" }}>
            Explore the most loved and popular books by readers worldwide.
          </p>
        </Card>
      </Col>

      {/* Card 3 */}
      <Col xs={24} md={12} lg={8}>
        <Card
          hoverable
          style={cardStyle}
          bodyStyle={{ padding: "20px" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div style={contentStyle}>
            <BookOutlined style={iconStyle} />
            <h3 style={{ fontWeight: "bold", margin: 0 }}>
              Personalized Picks
            </h3>
          </div>
          <p style={{ color: "#595959" }}>
            Handpicked books just for you, based on your reading preferences.
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default BannerCard;
