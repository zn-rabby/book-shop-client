import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${"https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}) no-repeat center center / cover`,
        color: "white",
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Row
        gutter={[24, 24]}
        align="middle"
        justify="center"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        <Col
          xs={24}
          style={{
            textAlign: "center",
            padding: "24px",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "24px",
              lineHeight: 1.2,
              textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            Discover Your Next{" "}
            <span style={{ color: "#20c77c" }}>Favorite Book</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              color: "rgba(255,255,255,0.9)",
              marginBottom: "32px",
              lineHeight: 1.6,
              maxWidth: "800px",
              margin: "0 auto",
              textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            Explore our curated collection of over 10,000 titles spanning all
            genres. From timeless classics to contemporary bestsellers, find the
            perfect book for every reader.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link to="/product">
              <Button
                type="primary"
                size="large"
                style={{
                  padding: "16px 40px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "8px",
                  background: "#20c77c",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(32, 199, 124, 0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                Browse Collection
              </Button>
            </Link>

            <Link to="/featured">
              <Button
                type="primary"
                size="large"
                style={{
                  padding: "16px 40px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "8px",
                  background: "#20c77c",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(32, 199, 124, 0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                New Releases
              </Button>
            </Link>
          </div>
        </Col>
      </Row>

      {/* Decorative bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100px",
          background: "linear-gradient(transparent, rgba(0,0,0,0.3))",
        }}
      />
    </div>
  );
};

export default Banner;
