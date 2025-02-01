import { Col, Row } from "antd";
import { useGetAllBooksQuery } from "../../redux/features/book/bookManagement";
import { TProduct } from "../../types/bookManagement.type";
import Carts from "../Home/Carts";

const AllProduct = () => {
  const { data: books } = useGetAllBooksQuery(undefined);
  const bookList = books?.data ?? [];

  return (
    <div className="home" style={{ padding: "20px" }}>
      <h2>All Products</h2>
      <Row gutter={[16, 16]}>
        {bookList.map((book: TProduct) => (
          <Col xs={24} sm={12} lg={8} key={book._id}>
            <Carts book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllProduct;
