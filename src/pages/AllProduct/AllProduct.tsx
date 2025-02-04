import { Col, Row, Input, Select, Pagination } from "antd";
import { useState, useMemo } from "react";
import { useGetAllBooksQuery } from "../../redux/features/book/bookManagement";
import { TProduct } from "../../types/bookManagement.type";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const { Search } = Input;
const { Option } = Select;

const AllProduct = () => {
  const { data: books } = useGetAllBooksQuery(undefined);

  const bookList = useMemo(() => books?.data ?? [], [books]);

  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  // Filtering books
  const filteredBooks = useMemo(() => {
    return bookList.filter((book: TProduct) => {
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
  }, [searchTerm, priceRange, bookList]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="home" style={{ padding: "20px" }}>
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
          }}
        >
          All Books
        </h2>
      </div>

      {/* Search and Filters Section */}
      <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
        <Col xl={16} xs={24} sm={8}>
          <Search
            placeholder="Search by title..."
            allowClear
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "100%" }}
          />
        </Col>
        <Col xs={24} sm={8}>
          <Select
            value={priceRange}
            style={{ width: "100%" }}
            onChange={(value) => setPriceRange(value)}
          >
            <Option value="all">All Prices</Option>
            <Option value="low">Below $20</Option>
            <Option value="mid">$20 - $50</Option>
            <Option value="high">Above $50</Option>
          </Select>
        </Col>
      </Row>

      {/* Book Cards Section */}
      <Row gutter={[16, 16]}>
        {paginatedBooks.map((book: TProduct) => (
          <Col xs={24} sm={12} lg={6} key={book._id}>
            <Link to={`/product/${book._id}`}>
              <Cards book={book} />
            </Link>
          </Col>
        ))}
      </Row>

      {/* Pagination Section */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Pagination
          current={currentPage}
          total={filteredBooks.length}
          pageSize={pageSize}
          onChange={onPageChange}
          showSizeChanger
          onShowSizeChange={(_current, size) => setPageSize(size)}
          pageSizeOptions={["3", "6", "9", "12"]}
        />
      </div>
    </div>
  );
};

export default AllProduct;
