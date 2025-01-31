import { Col, Row } from "antd";
import { useGetAllBooksQuery } from "../../redux/features/book/bookManagement";
import { TProduct } from "../../types/bookManagement.type";
import Carts from "../Home/Carts";

const AllProduct = () => {
  const { data: books } = useGetAllBooksQuery(undefined);
  // const navigate = useNavigate();
  const bookList = books?.data ?? [];
  console.log("dd", bookList);

  return (
    <div className="home">
      <h2>All Product</h2>
      <div>
        <Row gutter={[16, 24]}>
          <Col xs={24} md={12} lg={8}>
            {bookList.map((book: TProduct) => (
              <Carts key={book._id} book={book} />
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AllProduct;
