import { Row, Col, Card } from "antd";
import { SmileOutlined, HeartOutlined, BookOutlined } from "@ant-design/icons";

const BannerCard = () => {
  const cardStyle = {
    height: "100%",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const iconStyle = {
    fontSize: "30px",
    color: "#20c77c",
    marginRight: "10px",
  };

  const contentStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  };

  return (
    <Row
      gutter={[24, 24]}
      justify="center"
      style={{
        padding: "10px",
        maxWidth: "1600px",
        margin: "0 auto",
        width: "100%",
        marginTop: "30px",
      }}
    >
      {/* Card 1 */}
      <Col xs={24} sm={12} lg={8}>
        <Card
          hoverable
          style={cardStyle}
          bodyStyle={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div style={contentStyle}>
            <SmileOutlined style={iconStyle} />
            <h3
              style={{
                fontWeight: 600,
                margin: 0,
                fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
              }}
            >
              Exciting Offers
            </h3>
          </div>
          <p
            style={{
              color: "#595959",
              margin: 0,
              fontSize: "clamp(0.875rem, 1vw, 1rem)",
              lineHeight: 1.6,
            }}
          >
            Get 20% off on your first purchase of books. Discover amazing deals!
          </p>
        </Card>
      </Col>

      {/* Card 2 */}
      <Col xs={24} sm={12} lg={8}>
        <Card
          hoverable
          style={cardStyle}
          bodyStyle={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div style={contentStyle}>
            <HeartOutlined style={iconStyle} />
            <h3
              style={{
                fontWeight: 600,
                margin: 0,
                fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
              }}
            >
              Bestsellers
            </h3>
          </div>
          <p
            style={{
              color: "#595959",
              margin: 0,
              fontSize: "clamp(0.875rem, 1vw, 1rem)",
              lineHeight: 1.6,
            }}
          >
            Explore the most loved and popular books by readers worldwide.
          </p>
        </Card>
      </Col>

      {/* Card 3 */}
      <Col xs={24} sm={12} lg={8}>
        <Card
          hoverable
          style={cardStyle}
          bodyStyle={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            height: "100%",
          }}
        >
          <div style={contentStyle}>
            <BookOutlined style={iconStyle} />
            <h3
              style={{
                fontWeight: 600,
                margin: 0,
                fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
              }}
            >
              Personalized Picks
            </h3>
          </div>
          <p
            style={{
              color: "#595959",
              margin: 0,
              fontSize: "clamp(0.875rem, 1vw, 1rem)",
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            Handpicked books just for you, based on your reading preferences.
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default BannerCard;
