import { useNavigate } from "react-router-dom";
import { TProduct } from "../../types/bookManagement.type";
import { Card, Button, Rate, notification, Tooltip, Typography } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const { Title, Text } = Typography;

interface CartProps {
  book: TProduct | undefined;
}

const Cards: React.FC<CartProps> = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!book) {
    return (
      <div style={{ textAlign: "center", padding: "20px", fontSize: "16px" }}>
        Loading...
      </div>
    );
  }

  const handleViewDetails = () => {
    navigate(`/book-details/${book._id}`);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: book._id,
        title: book.title, // Use name if title does not exist
        name: book.name, // Use name if title does not exist
        price: book.price,
        image: book.image,
        // quantity: 1,
        // author: book.author,
      })
    );

    notification.success({
      message: "Added to Cart",
      description: `${book.name} has been added to your cart.`, // Use name instead of title
      placement: "bottomRight",
      duration: 2,
    });
  };

  return (
    <Card
      hoverable
      style={{
        borderRadius: "14px",
        boxShadow: "0 8px 18px rgba(0, 0, 0, 0.08)",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
      }}
      cover={
        <div
          style={{
            overflow: "hidden",
            borderTopLeftRadius: "14px",
            borderTopRightRadius: "14px",
            position: "relative",
          }}
        >
          <img
            alt={book.title}
            src={book.image}
            style={{
              height: "280px",
              width: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </div>
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 18px rgba(0, 0, 0, 0.08)";
      }}
    >
      <div style={{ padding: "16px" }}>
        <Title
          level={5}
          style={{
            margin: 0,
            fontWeight: 700,
            fontSize: "18px",
            color: "#333",
          }}
        >
          {book.name}
        </Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Text strong style={{ fontSize: "16px", color: "#27ae60" }}>
            ${book.price}
          </Text>
          <Rate
            style={{ fontSize: "14px", color: "#f1c40f" }}
            disabled
            value={book.rating || 4}
          />
        </div>
        <Text
          type="secondary"
          style={{
            display: "block",
            fontSize: "14px",
            marginBottom: "12px",
            color: "#666",
          }}
        >
          {book.description.length > 65
            ? book.description.slice(0, 65) + "..."
            : book.description}
        </Text>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Tooltip title="View Details">
            <Button
              type="default"
              icon={<EyeOutlined />}
              style={{
                flex: 1,
                borderRadius: "8px",
                fontWeight: 500,
                padding: "12px",
                fontSize: "15px",
                transition: "all 0.2s",
                backgroundColor: "#f5f5f5",
                color: "#333",
                borderColor: "#d9d9d9",
              }}
              onClick={handleViewDetails}
            >
              Details
            </Button>
          </Tooltip>

          <Tooltip title="Add to Cart">
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              style={{
                flex: 1,
                backgroundColor: "#2ecc71",
                borderColor: "#27ae60",
                borderRadius: "8px",
                fontWeight: 500,
                padding: "12px",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.2s",
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Tooltip>
        </div>
      </div>
    </Card>
  );
};

export default Cards;
