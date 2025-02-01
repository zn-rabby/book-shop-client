import { Col, Row, Input, Select } from "antd";
import { useState } from "react";
import { useGetAllBooksQuery } from "../../redux/features/book/bookManagement";
import { TProduct } from "../../types/bookManagement.type";
import Cards from "./Cards";

const { Search } = Input;
const { Option } = Select;

const AllProduct = () => {
  const { data: books } = useGetAllBooksQuery(undefined);
  const bookList = books?.data ?? [];

  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");

  const filteredBooks = bookList.filter((book: TProduct) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "low" && book.price < 20) ||
      (priceRange === "mid" && book.price >= 20 && book.price <= 50) ||
      (priceRange === "high" && book.price > 50);
    return matchesSearch && matchesPrice;
  });

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
          📚 All Books
        </h2>
      </div>

      <Row gutter={[16, 16]}>
        {/* Search & Filter Section */}
        <Col xs={24} sm={6}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Select
              defaultValue="all"
              style={{ width: "100%" }}
              onChange={(value) => setPriceRange(value)}
            >
              <Option value="all">All Prices</Option>
              <Option value="low">Below $20</Option>
              <Option value="mid">$20 - $50</Option>
              <Option value="high">Above $50</Option>
            </Select>
          </div>
        </Col>

        {/* Book Cards Section */}
        <Col xs={24} sm={18}>
          <Row gutter={[16, 16]}>
            <Search
              placeholder="Search by title..."
              allowClear
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: "100%" }}
            />
            {filteredBooks.map((book: TProduct) => (
              <Col xs={24} sm={12} lg={6} key={book._id}>
                <Cards book={book} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AllProduct;
