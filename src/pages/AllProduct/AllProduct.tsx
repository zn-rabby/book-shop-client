import {
  Col,
  Row,
  Input,
  Select,
  Pagination,
  Card,
  Rate,
  Button,
  Slider,
  Checkbox,
  Empty,
  Spin,
  Space,
  Typography,
} from "antd";
import type { CheckboxOptionType } from "antd/es/checkbox";
import { useState, useMemo } from "react";
import { useGetAllBooksQuery } from "../../redux/features/book/bookManagement";
import { TProduct } from "../../types/bookManagement.type";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

const { Search } = Input;
const { Title, Text } = Typography;

type Category =
  | "fiction"
  | "children"
  | "science"
  | "religion"
  | "history"
  | "biography"
  | "romance"
  | "mystery"
  | "selfHelp"
  | "politics"
  | "business"
  | "education";

const AllProduct = () => {
  const { data: books, isLoading, isError } = useGetAllBooksQuery(undefined);
  const navigate = useNavigate();

  const bookList = useMemo(() => books?.data ?? [], [books]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const categories: CheckboxOptionType[] = [
    { label: "Fiction", value: "fiction" },
    { label: "Children", value: "children" },
    { label: "Science", value: "science" },
    { label: "Religion", value: "religion" },
    { label: "History", value: "history" },
    { label: "Biography", value: "biography" },
    { label: "Romance", value: "romance" },
    { label: "Mystery", value: "mystery" },
    { label: "Self Help", value: "selfHelp" },
    { label: "Politics", value: "politics" },
    { label: "Business", value: "business" },
    { label: "Education", value: "education" },
  ];

  const filteredBooks = useMemo(() => {
    if (!bookList) return [];

    return bookList
      .filter((book: TProduct) => {
        const matchesSearch = book.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(book.category as Category);
        const matchesRating = book.rating ? book.rating >= ratingFilter : false;
        const matchesPrice =
          book.price >= priceRange[0] && book.price <= priceRange[1];

        return (
          matchesSearch && matchesCategory && matchesRating && matchesPrice
        );
      })
      .sort((a, b) => {
        if (sortBy === "priceAsc") return a.price - b.price;
        if (sortBy === "priceDesc") return b.price - a.price;
        if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);

        return 0;
      });
  }, [
    bookList,
    searchTerm,
    selectedCategories,
    ratingFilter,
    priceRange,
    sortBy,
  ]);

  const paginatedBooks = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredBooks.slice(startIndex, startIndex + pageSize);
  }, [filteredBooks, currentPage, pageSize]);

  const handleCategoryChange = (checkedValues: Category[]) => {
    setSelectedCategories(checkedValues);
    setCurrentPage(1);
  };

  const handlePriceChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setPriceRange([value[0], value[1]]);
      setCurrentPage(1);
    }
  };

  const handleRatingChange = (value: number) => {
    setRatingFilter(value);
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
    setRatingFilter(0);
    setSortBy("default");
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <div style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
        <Spin size="large" tip="Loading books..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <Text type="danger">
              Failed to load books. Please try again later.
            </Text>
          }
        />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "24px" }}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <header style={{ textAlign: "center" }}>
          <Title level={2} style={{ color: "#1890ff", marginBottom: "8px" }}>
            Book Store
          </Title>
          <Text type="secondary">
            Discover your next favorite book from our collection
          </Text>
        </header>

        <Row gutter={[24, 24]}>
          {/* Filters Sidebar */}
          <Col xs={24} sm={8} md={6}>
            <Card
              title="Filters"
              bordered={false}
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
            >
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <div>
                  <Title level={5} style={{ marginBottom: "8px" }}>
                    Search
                  </Title>
                  <Search
                    placeholder="Search by title..."
                    allowClear
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    style={{ width: "100%" }}
                  />
                </div>

                <div>
                  <Title level={5} style={{ marginBottom: "8px" }}>
                    Categories
                  </Title>
                  <Checkbox.Group
                    options={categories}
                    value={selectedCategories}
                    onChange={handleCategoryChange}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  />
                </div>

                <div>
                  <Title level={5} style={{ marginBottom: "8px" }}>
                    Price Range
                  </Title>
                  <Slider
                    range
                    min={0}
                    max={1000}
                    step={10}
                    value={priceRange}
                    onChange={handlePriceChange}
                    tooltip={{ formatter: (value) => `$${value}` }}
                  />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text>${priceRange[0]}</Text>
                    <Text>${priceRange[1]}</Text>
                  </div>
                </div>

                <div>
                  <Title level={5} style={{ marginBottom: "8px" }}>
                    Minimum Rating
                  </Title>
                  <Rate
                    allowHalf
                    value={ratingFilter}
                    onChange={handleRatingChange}
                  />
                  {ratingFilter > 0 && (
                    <Button
                      type="link"
                      onClick={() => handleRatingChange(0)}
                      size="small"
                      style={{ marginLeft: "8px" }}
                    >
                      Clear
                    </Button>
                  )}
                </div>
              </Space>
            </Card>
          </Col>

          {/* Main Content */}
          <Col xs={24} sm={16} md={18}>
            <Card
              bordered={false}
              style={{
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Title level={5} style={{ margin: 0 }}>
                  {filteredBooks.length} books found
                </Title>
                <Select
                  value={sortBy}
                  onChange={(value) => {
                    setSortBy(value);
                    setCurrentPage(1);
                  }}
                  style={{ width: "200px" }}
                  options={[
                    { value: "default", label: "Default Sorting" },
                    { value: "priceAsc", label: "Price: Low to High" },
                    { value: "priceDesc", label: "Price: High to Low" },
                    { value: "rating", label: "Highest Rating" },
                    { value: "newest", label: "Newest Arrivals" },
                  ]}
                />
              </div>
            </Card>

            {/* Book List */}
            {paginatedBooks.length > 0 ? (
              <Row gutter={[16, 24]}>
                {paginatedBooks.map((book: TProduct) => (
                  <Col
                    key={book._id}
                    xs={24}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={6}
                    onClick={() => navigate(`/book/${book._id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <Cards book={book} />
                  </Col>
                ))}
              </Row>
            ) : (
              <Card
                style={{
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                }}
              >
                <Empty
                  description="No books match your current filters"
                  imageStyle={{ height: 80 }}
                />
                <Button
                  type="primary"
                  onClick={clearAllFilters}
                  style={{ marginTop: "16px" }}
                >
                  Clear All Filters
                </Button>
              </Card>
            )}

            {/* Pagination */}
            {filteredBooks.length > 0 && (
              <div style={{ marginTop: "24px", textAlign: "center" }}>
                <Pagination
                  current={currentPage}
                  total={filteredBooks.length}
                  pageSize={pageSize}
                  onChange={setCurrentPage}
                  showSizeChanger
                  onShowSizeChange={(size) => {
                    setPageSize(size);
                    setCurrentPage(1);
                  }}
                  pageSizeOptions={["12", "24", "48", "96"]}
                  showTotal={(total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`
                  }
                />
              </div>
            )}
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default AllProduct;
