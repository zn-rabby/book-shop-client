import { Fragment } from "react/jsx-runtime";
import {
  MailOutlined,
  UserOutlined,
  ShoppingOutlined,
  StarOutlined,
  NumberOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Typography, Space } from "antd";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHTextArea from "../../../components/form/PHTextArea";
import { z } from "zod";
import { TProduct } from "../../../types/bookManagement.type";
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
  const onSubmit = async (data: TProduct) => {
    const toastId = toast.loading("Updating product...");
    try {
      const productData = {
        ...data,
        price: parseFloat(data.price),
        rating: parseFloat(data.rating),
        quantity: parseInt(data.quantity),
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
              schema={updateProductValidationSchema}
              defaultValues={initialValues} // Set initial values
            >
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                {/* Name */}
                <PHInput
                  label={
                    <span>
                      Name <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  type="text"
                  name="name"
                  placeholder="Enter Product Name"
                  rules={[
                    { required: true, message: "Please enter product name" },
                  ]}
                  icon={<UserOutlined />}
                />
                {/* Title */}
                <PHInput
                  type="text"
                  label={
                    <span>
                      Title <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  name="title"
                  placeholder="Product Title"
                  rules={[
                    { required: true, message: "Please enter product title" },
                  ]}
                  icon={<ShoppingOutlined />}
                />
                {/* Category */}
                <PHInput
                  type="text"
                  name="category"
                  label={
                    <span>
                      Category <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  placeholder="Product Category"
                  rules={[
                    {
                      required: true,
                      message: "Please enter product category!",
                    },
                  ]}
                  icon={<ShoppingOutlined />}
                />
                {/* Author */}
                <PHInput
                  type="text"
                  name="author"
                  label={
                    <span>
                      Author <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  placeholder="Product Author"
                  rules={[
                    { required: true, message: "Please enter product author!" },
                  ]}
                  icon={<UserOutlined />}
                />
                {/* Description */}
                <PHTextArea
                  type="text"
                  name="description"
                  label={
                    <span>
                      Description <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  placeholder="Product Description"
                  rules={[
                    {
                      required: true,
                      message: "Please enter product description!",
                    },
                  ]}
                  icon={<MailOutlined />}
                />
                {/* Price */}
                <PHInput
                  type="number"
                  name="price"
                  label={
                    <span>
                      Price <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  placeholder="Product Price"
                  rules={[
                    { required: true, message: "Please enter product price!" },
                  ]}
                  icon={<NumberOutlined />}
                />
                {/* Image */}
                <PHInput
                  type="text"
                  name="image"
                  label={
                    <span>
                      Image URL <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  placeholder="Product Image URL"
                  rules={[
                    {
                      required: true,
                      message: "Please enter product image URL!",
                    },
                  ]}
                  icon={<MailOutlined />}
                />
                {/* Rating */}
                <PHInput
                  type="number"
                  name="rating"
                  label={
                    <span>
                      Rating <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  placeholder="Product Rating (1-5)"
                  rules={[
                    { required: true, message: "Please enter product rating!" },
                  ]}
                  icon={<StarOutlined />}
                />
                {/* Quantity */}
                <PHInput
                  type="number"
                  name="quantity"
                  label={
                    <span>
                      Quantity <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  placeholder="Product Quantity"
                  rules={[
                    {
                      required: true,
                      message: "Please enter product quantity!",
                    },
                  ]}
                  icon={<NumberOutlined />}
                />
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

// Validation schema for updating a product
const updateProductValidationSchema = z.object({
  name: z.string().nonempty("Name is required"),
  title: z.string().nonempty("Title is required"),
  category: z.string().nonempty("Category is required"),
  author: z.string().nonempty("Author is required"),
  description: z.string().nonempty("Description is required"),
  price: z.string().refine((val) => !isNaN(parseFloat(val)), {
    message: "Price must be a number",
  }),
  image: z.string().url("Image must be a valid URL"),
  rating: z.string().refine((val) => !isNaN(parseFloat(val)), {
    message: "Rating must be a number",
  }),
  quantity: z.string().refine((val) => !isNaN(parseInt(val)), {
    message: "Quantity must be a number",
  }),
});
