import { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Col, Row, Divider, Space, Rate, Button, Skeleton } from "antd";
import { useMediaQuery } from "react-responsive";
import { useGetProductQuery } from "../../../redux/features/book/productsApi";
import { TProduct } from "../../../types/bookManagement.type";

export default function ProductDetails() {
  const { id } = useParams();
  const { data: productData, isFetching } = useGetProductQuery(id);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  if (isFetching) {
    return (
      <Row
        gutter={[16, 16]}
        justify="center"
        align="middle"
        className="min-h-screen"
      >
        <Col xs={24} sm={12} md={8}>
          <Skeleton.Image active className="w-full h-64 rounded-lg" />
        </Col>
        <Col xs={24} sm={12} md={16}>
          <Card loading bordered={false} className="w-full">
            <Skeleton active paragraph={{ rows: 8 }} />
          </Card>
        </Col>
      </Row>
    );
  }

  if (!productData?.data) {
    return (
      <div className="text-center text-xl text-red-500">Product not found.</div>
    );
  }

  const product = productData.data as TProduct;

  return (
    <Fragment>
      <Row gutter={[16, 16]} className="p-4" justify="center">
        {/* Product Image */}
        <Col xs={24} sm={12} md={8} className="flex justify-center">
          <Card
            cover={
              <img
                alt={product.title}
                src={product.image}
                className="w-full rounded-lg"
              />
            }
          />
        </Col>

        {/* Product Details */}
        <Col xs={24} sm={12} md={16}>
          <Card
            title={product.title}
            bordered={false}
            className="shadow-lg rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <strong>Category:</strong> {product.category}
              </div>
              <div>
                <strong>Author:</strong> {product.author}
              </div>
              <div>
                <strong>Price:</strong> {product.price} BDT
              </div>
              <div>
                <strong>Quantity:</strong> {product.quantity}
              </div>
              <div>
                <strong>Rating:</strong>{" "}
                <Rate disabled value={product.rating} />
              </div>
            </div>

            <Divider />
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="text-gray-600">{product.description}</p>

            <Space className="mt-4">
              <Link to="/dashboard/products">
                <Button type="primary">Back to Products</Button>
              </Link>
            </Space>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
