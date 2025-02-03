import { Card, Avatar, Typography, Carousel } from "antd";
import { StarFilled } from "@ant-design/icons";

const { Text } = Typography;

const testimonials = [
  {
    id: 1,
    name: "Md. Hasan Ali",
    review:
      "This website offers the best shopping experience! The UI is smooth, and the product quality is top-notch. Highly recommended!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Sarah Rahman",
    review:
      "Excellent service and fast delivery. The customer support team is very responsive and helpful.",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Aminul Haque",
    review:
      "I love the variety of products available. The checkout process was super easy and secure!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    review:
      "Great experience! The website is well-designed and easy to navigate.",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    name: "Rahim Uddin",
    review:
      "I have been shopping here for months, and I love the product quality and customer service!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 6,
    name: "Fatima Khan",
    review: "The best eCommerce website I have ever used. Highly recommended!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=6",
  },
];

const Testimonial: React.FC = () => {
  return (
    <div style={{ padding: "60px 20px", background: "#eef2f5" }}>
      <Typography.Title
        level={2}
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#333",
          fontWeight: 600,
        }}
      >
        What Our Customers Say
      </Typography.Title>

      <Carousel
        autoplay
        dots={{ className: "custom-dots" }}
        slidesToShow={3}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ]}
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {testimonials.map(({ id, name, review, rating, avatar }) => (
          <div key={id} style={{ padding: "5px" }}>
            <Card
              style={{
                textAlign: "center",
                borderRadius: "15px",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
                border: "none",
                background: "linear-gradient(135deg, #ffffff, #f3f4f6)",
                padding: "15px",
                maxWidth: "330px",
                height: "300px",
                margin: "auto",
              }}
            >
              <Avatar
                src={avatar}
                size={70}
                style={{ border: "3px solid #1890ff" }}
              />
              <Typography.Title
                level={4}
                style={{ marginTop: "10px", color: "#222" }}
              >
                {name}
              </Typography.Title>
              <div style={{ marginBottom: "8px" }}>
                {[...Array(rating)].map((_, index) => (
                  <StarFilled
                    key={index}
                    style={{
                      color: "#fadb14",
                      fontSize: "16px",
                      marginRight: "4px",
                    }}
                  />
                ))}
              </div>
              <Text
                type="secondary"
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontStyle: "italic",
                  color: "#444",
                  lineHeight: "1.5",
                }}
              >
                "{review}"
              </Text>
            </Card>
          </div>
        ))}
      </Carousel>

      <style>
        {`
          .custom-dots li button {
            background: #888 !important;
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }
          .custom-dots li.slick-active button {
            background: #1890ff !important;
          }
        `}
      </style>
    </div>
  );
};

export default Testimonial;
