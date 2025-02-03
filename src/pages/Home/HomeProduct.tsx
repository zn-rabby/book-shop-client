import { Col, Row } from "antd";
import { useGetAllBooksQuery } from "../../redux/features/book/bookManagement";
import { TProduct } from "../../types/bookManagement.type";
import Cards from "../AllProduct/Cards";
import { Link } from "react-router-dom";
// import Cards from "./Cards";

const HomeProducts = () => {
  const { data: books } = useGetAllBooksQuery(undefined);
  const bookList = books?.data ?? [];

  return (
    <div className="home" style={{ padding: "20px" }}>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          padding: "10px 0",
          borderBottom: "3px solid #00b96b",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#333",
            textTransform: "uppercase",
          }}
        >
          📚 Books Display
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
    </div>
  );
};

export default HomeProducts;
