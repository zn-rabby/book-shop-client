import { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Divider, Space, Rate, Button, Skeleton, Image } from "antd";
import { useGetProductQuery } from "../../../redux/features/book/productsApi";
import { TProduct } from "../../../types/bookManagement.type";

export default function ProductDetails() {
  const { id } = useParams();
  const { data: productData, isFetching } = useGetProductQuery(id);

  if (isFetching) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        {" "}
        {/* Inline CSS for background */}
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
          <Skeleton.Image active className="w-full h-96 mb-4 rounded-lg" />
          <Skeleton active paragraph={{ rows: 6 }} />
        </div>
      </div>
    );
  }

  if (!productData?.data) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        {" "}
        {/* Inline CSS for background */}
        <div className="text-center text-2xl text-red-500">
          Product not found.
        </div>
      </div>
    );
  }

  const product = productData.data as TProduct;

  return (
    <Fragment>
      <div
        className="min-h-screen flex justify-center p-4"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        {" "}
        {/* Inline CSS for background */}
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 ">
              <Image
                alt={product.title}
                src={product.image}
                className="w-full h-auto rounded-lg" // Removed lg:w-full and object-cover
                preview
                style={{ maxHeight: "500px", objectFit: "contain" }} // Key changes here
              />
            </div>

            <div className="md:w-1/2" style={{ padding: "10px" }}>
              <h2
                className="text-2xl font-semibold mb-2"
                style={{ color: "#333" }}
              >
                {product.title}
              </h2>{" "}
              {/* Inline CSS */}
              <div className="flex items-center mb-2">
                <Rate
                  disabled
                  value={product.rating}
                  style={{ color: "#FFD700" }}
                />{" "}
                {/* Inline CSS for Rate */}
                <span className="ml-2 text-gray-500">({product.rating})</span>
              </div>
              <div className="mb-2" style={{ color: "#555" }}>
                {" "}
                {/* Inline CSS */}
                <strong>Category:</strong> {product.category}
              </div>
              <div className="mb-2" style={{ color: "#555" }}>
                {" "}
                {/* Inline CSS */}
                <strong>Author:</strong> {product.author}
              </div>
              <div className="mb-2" style={{ color: "#555" }}>
                {" "}
                {/* Inline CSS */}
                <strong>Price:</strong> {product.price} BDT
              </div>
              <div className="mb-2" style={{ color: "#555" }}>
                {" "}
                {/* Inline CSS */}
                <strong>Quantity:</strong> {product.quantity}
              </div>
              <Divider className="my-4" style={{ backgroundColor: "#ddd" }} />{" "}
              {/* Inline CSS for Divider */}
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#333" }}
              >
                Description
              </h3>{" "}
              {/* Inline CSS */}
              <p
                className="text-gray-700 leading-relaxed"
                style={{ color: "#666" }}
              >
                {product.description}
              </p>{" "}
              {/* Inline CSS */}
              <Space className="mt-6">
                <Link to="/dashboard/products">
                  <Button
                    type="primary"
                    style={{
                      backgroundColor: "#1890ff",
                      borderColor: "#1890ff",
                    }}
                  >
                    Back to Products
                  </Button>{" "}
                  {/* Inline CSS for Button */}
                </Link>
              </Space>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
