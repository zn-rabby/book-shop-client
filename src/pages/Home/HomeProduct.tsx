import { Button, Col, Row, Typography, Space, theme } from "antd";
import { useGetAllBooksQuery } from "../../redux/features/book/bookManagement";
import { TProduct } from "../../types/bookManagement.type";
import Cards from "../AllProduct/Cards";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;
const { useToken } = theme;

const HomeProducts = () => {
  const { data: books } = useGetAllBooksQuery(undefined);
  const bookList = books?.data ?? [];
  const { token } = useToken();

  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: 1600,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Space
        direction="vertical"
        size="middle"
        style={{ width: "100%", textAlign: "center", marginBottom: 32 }}
      >
        <Text
          style={{
            color: token.colorPrimary,
            fontWeight: 600,
            letterSpacing: 1.5,
            fontSize: 14,
            textTransform: "uppercase",
          }}
        >
          Featured Collection
        </Text>
        <Title
          level={2}
          style={{
            margin: 0,
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 700,
            color: token.colorTextHeading,
          }}
        >
          Explore Our Curated Selection
        </Title>
      </Space>

      <Row gutter={[24, 24]} justify="center">
        {bookList?.slice(0, 8)?.map((book: TProduct) => (
          <Col
            key={book._id}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link
              to={`/product/${book._id}`}
              style={{ width: "100%", textDecoration: "none" }}
            >
              <Cards book={book} />
            </Link>
          </Col>
        ))}
      </Row>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Link to="/product">
          <Button
            type="primary"
            size="large"
            style={{
              height: 48,
              padding: "0 32px",
              fontSize: 16,
              fontWeight: 500,
              borderRadius: 8,
              boxShadow: `0 4px 12px ${token.colorPrimaryBg}`,
            }}
          >
            View All Books
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
