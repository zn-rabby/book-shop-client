/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react/jsx-runtime";
import { Button, Card, Col, Row, Typography, Space } from "antd";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHTextArea from "../../../components/form/PHTextArea";
import { useUpdateProductMutation } from "../../../redux/features/book/productsApi";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../../redux/features/book/productsApi"; // Import the missing hook

const { Title } = Typography;

export default function UpdateProduct() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Fetch the product data
  const { data: productData, isLoading } = useGetProductQuery(id);

  // Update product mutation
  const [updateProduct] = useUpdateProductMutation();

  // Handle form submission
  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Updating product...");
    try {
      const productData = {
        ...data,
        price: parseFloat(data.price as unknown as string), // Ensure it's parsed as a number
        rating: parseFloat(data.rating as unknown as string), // Ensure it's parsed as a number
        quantity: parseInt(data.quantity as unknown as string, 10), // Ensure it's parsed as a number
      };

      // Send the update request with the product ID
      await updateProduct({ id, data: productData }).unwrap();
      toast.success("Product has been updated successfully!", {
        id: toastId,
        duration: 2000,
      });
      navigate("/dashboard/products");
    } catch (err: any) {
      toast.error(
        err.data.message || "Product update failed. Please try again.",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  // If data is still loading, show a loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If no product data is found, show an error message
  if (!productData || !productData.data) {
    return <div>Product not found.</div>;
  }

  // Pre-fill the form with existing product data
  const initialValues = {
    name: productData.data.name,
    title: productData.data.title,
    category: productData.data.category,
    author: productData.data.author,
    description: productData.data.description,
    price: productData.data.price.toString(),
    image: productData.data.image,
    rating: productData.data.rating.toString(),
    quantity: productData.data.quantity.toString(),
  };

  return (
    <Fragment>
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Card
            title={
              <Title level={3} style={{ textAlign: "center", margin: 0 }}>
                Update Product
              </Title>
            }
            bordered={false}
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
          >
            <PHForm
              onSubmit={onSubmit}
              defaultValues={initialValues} // Set initial values
            >
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                {/* Name */}
                <PHInput label="Name" type="text" name="name" />
                {/* Title */}
                <PHInput type="text" label="Title" name="title" />
                {/* Category */}
                <PHInput type="text" name="category" label="Category" />
                {/* Author */}
                <PHInput type="text" name="author" label="Author" />
                {/* Description */}
                <PHTextArea
                  name="description"
                  label="Product Description"
                  rows={4} // Optional, defaults to 4
                />
                {/* Price */}
                <PHInput type="number" name="price" label="Price" />
                {/* Image */}
                <PHInput type="text" name="image" label="Image URL" />
                {/* Rating */}
                <PHInput type="number" name="rating" label="Rating" />
                {/* Quantity */}
                <PHInput type="number" name="quantity" label="Quantity" />
                <Button type="primary" htmlType="submit" block>
                  Update Product
                </Button>
              </Space>
            </PHForm>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
