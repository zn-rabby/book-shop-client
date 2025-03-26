import { Card, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

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

interface CategoryItem {
  id: Category;
  name: string;
  image: string;
}

const categories: CategoryItem[] = [
  {
    id: "fiction",
    name: "Fiction",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "children",
    name: "Children",
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "science",
    name: "Science",
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "religion",
    name: "Religion",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "history",
    name: "History",
    image:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "biography",
    name: "Biography",
    image:
      "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "romance",
    name: "Romance",
    image:
      "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "mystery",
    name: "Mystery",
    image:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "selfHelp",
    name: "Self-Help",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "politics",
    name: "Politics",
    image:
      "https://images.unsplash.com/photo-1580130732478-4e339fb33746?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "business",
    name: "Business",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "education",
    name: "Education",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

const CategorySection = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        maxWidth: 1600,
        margin: "0 auto",
      }}
    >
      <Title
        level={2}
        style={{
          textAlign: "center",
          marginBottom: 60,
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 600,
        }}
      >
        Browse Our Book Categories
      </Title>

      <Row gutter={[24, 32]} justify="center">
        {categories.map((category) => (
          <Col
            key={category.id}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            style={{ display: "flex" }}
          >
            <Link
              to={`/books?category=${category.id}`}
              style={{ width: "100%" }}
            >
              <Card
                hoverable
                style={{
                  height: "100%",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  border: "none",
                }}
                cover={
                  <div
                    style={{
                      height: 160,
                      background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(${category.image}) center/cover`,
                    }}
                  />
                }
                bodyStyle={{ padding: "20px 16px" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Title
                    level={4}
                    style={{
                      margin: 0,
                      fontSize: "1.25rem",
                      fontWeight: 500,
                    }}
                  >
                    {category.name}
                  </Title>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CategorySection;
