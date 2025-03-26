import { Button, Col, Row } from "antd";
import { useGetAllBooksQuery } from "../../redux/features/book/bookManagement";
import { TProduct } from "../../types/bookManagement.type";
import Cards from "../AllProduct/Cards";
import { Link } from "react-router-dom";
// import Cards from "./Cards";

const HomeProducts = () => {
  const { data: books } = useGetAllBooksQuery(undefined);
  const bookList = books?.data ?? [];

  return (
    <div
      className="home"
      style={{
        padding: "20px",
        maxWidth: "1600px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          padding: "10px 0",
          borderBottom: "2px solid #00b96b",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#333",
            textTransform: "uppercase",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          Books Display
        </h2>
      </div>
      <Row gutter={[16, 16]}>
        {bookList?.slice(0, 8)?.map((book: TProduct) => (
          <Col xs={24} sm={12} lg={6} key={book._id}>
            <Link to={`/product/${book._id}`}>
              {" "}
              {/* Add Link here */}
              <Cards book={book} />
            </Link>
          </Col>
        ))}
      </Row>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Link to="/product">
          <Button
            type="primary"
            size="large"
            style={{
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "6px",
            }}
          >
            View All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
