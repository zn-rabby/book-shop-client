/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react/jsx-runtime";

import { Button, Card, Col, Row, Typography, Space } from "antd";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHTextArea from "../../../components/form/PHTextArea";
import { TProduct } from "../../../types/bookManagement.type";
import { useAddProductMutation } from "../../../redux/features/book/productsApi";

const { Title } = Typography;

export default function CreateProduct() {
  const [createProduct] = useAddProductMutation();

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Creating product...");
    try {
      const productData: TProduct = {
        ...data,
        price: parseFloat(data.price as unknown as string), // Ensure it's parsed as a number
        rating: parseFloat(data.rating as unknown as string), // Ensure it's parsed as a number
        quantity: parseInt(data.quantity as unknown as string, 10), // Ensure it's parsed as a number
      };

      await createProduct(productData).unwrap();
      toast.success("Product has been created successfully!", {
        id: toastId,
        duration: 2000,
      });
    } catch (err: any) {
      toast.error(
        err.data.message || "Product creation failed. Please try again.",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  return (
    <Fragment>
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Card
            title={
              <Title level={3} style={{ textAlign: "center", margin: 0 }}>
                Create Product
              </Title>
            }
            bordered={false}
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
          >
            <PHForm onSubmit={onSubmit}>
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
                {/* <PHTextArea
                  type="text"
                  name="description"
                  label="Description"
                /> */}
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
                  Create Product
                </Button>
              </Space>
            </PHForm>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
