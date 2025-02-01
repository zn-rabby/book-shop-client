import { Col, Row, Input, Select, Pagination } from "antd";
import { useState, useMemo } from "react";
import { useGetAllBooksQuery } from "../../redux/features/book/bookManagement";
import { TProduct } from "../../types/bookManagement.type";
import Cards from "./Cards";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

const { Search } = Input;
const { Option } = Select;

const AllProduct = () => {
  const { data: books } = useGetAllBooksQuery(undefined);

  // Moved bookList initialization inside useMemo to avoid unnecessary re-calculations
  const bookList = useMemo(() => books?.data ?? [], [books]);

  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  // Filtering books based on search term, price range, and category
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
      const matchesCategory =
        categoryFilter === "all" || book.category === categoryFilter;

      return matchesSearch && matchesPrice && matchesCategory;
    });
  }, [searchTerm, priceRange, categoryFilter, bookList]);

  // Pagination calculations
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onPageSizeChange = (value: string) => {
    setPageSize(Number(value)); // Update page size based on the selected value
  };

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
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
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

            {/* Category Filter */}
            <Select
              value={categoryFilter}
              style={{ width: "100%" }}
              onChange={(value) => setCategoryFilter(value)}
            >
              <Option value="all">All Categories</Option>
              <Option value="fiction">Fiction</Option>
              <Option value="non-fiction">Non-Fiction</Option>
              <Option value="history">History</Option>
              <Option value="science">Science</Option>
            </Select>

            {/* Page Size Selector */}
            <Select
              value={pageSize.toString()}
              style={{ width: "100%" }}
              onChange={onPageSizeChange}
            >
              <Option value="3">3 Books per page</Option>
              <Option value="6">6 Books per page</Option>
              <Option value="9">9 Books per page</Option>
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
            {paginatedBooks.map((book: TProduct) => (
              <Col xs={24} sm={12} lg={6} key={book._id}>
                <Link to={`/product/${book._id}`}>
                  {" "}
                  {/* Add Link here */}
                  <Cards book={book} />
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Pagination Section */}
      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <Pagination
          current={currentPage}
          total={filteredBooks.length}
          pageSize={pageSize}
          onChange={onPageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default AllProduct;
