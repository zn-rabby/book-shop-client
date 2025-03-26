import { Card, Avatar, Typography, Carousel, Space } from "antd";
import { StarFilled } from "@ant-design/icons";

const { Text, Title } = Typography;

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
    <section style={{ padding: "80px 20px" }}>
      <div
        style={{ maxWidth: "1600px", margin: "0 auto", textAlign: "center" }}
      >
        <Space direction="vertical" size="middle">
          <Text
            style={{
              color: "#2DC86F", // Green Accent
              fontWeight: 600,
              letterSpacing: "1px",
              fontSize: "16px",
              textTransform: "uppercase",
            }}
          >
            Customer Feedback
          </Text>

          <Title
            level={2}
            style={{
              margin: 0,
              fontSize: "clamp(28px, 3vw, 36px)",
              fontWeight: 700,
              color: "#1a1a1a",
            }}
          >
            Voices of Satisfaction
          </Title>
        </Space>

        <Carousel
          autoplay
          autoplaySpeed={5000}
          dots={{ className: "custom-dots" }}
          slidesToShow={4}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
          ]}
          style={{ padding: "0 20px", marginTop: "40px" }}
        >
          {testimonials.map(({ id, name, review, rating, avatar }) => (
            <div key={id} style={{ padding: "10px" }}>
              <Card
                hoverable
                style={{
                  textAlign: "center",
                  borderRadius: "15px",
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
                  border: "none",
                  background: "#F6FFED", // Light Green Background for Cards
                  padding: "20px",
                  maxWidth: "340px",
                  height: "320px",
                  margin: "auto",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <Avatar
                  src={avatar}
                  size={80}
                  style={{
                    border: "3px solid #2DC86F",
                    boxShadow: "0 4px 10px rgba(45, 200, 111, 0.3)",
                  }}
                />
                <Title
                  level={4}
                  style={{ marginTop: "10px", color: "#222", fontWeight: 600 }}
                >
                  {name}
                </Title>

                <div style={{ marginBottom: "8px" }}>
                  {[...Array(5)].map((_, i) => (
                    <StarFilled
                      key={i}
                      style={{
                        color: i < rating ? "#FFD700" : "#e8e8e8",
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
                    color: "#555",
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
              background: #aaa !important;
              width: 10px;
              height: 10px;
              border-radius: 50%;
            }
            .custom-dots li.slick-active button {
              background: #2DC86F !important;
            }
            .ant-card:hover {
              transform: translateY(-5px);
              box-shadow: 0px 8px 20px rgba(45, 200, 111, 0.3);
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Testimonial;
