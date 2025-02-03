import { Fragment } from "react/jsx-runtime";
import {
  MailOutlined,
  UserOutlined,
  ShoppingOutlined,
  StarOutlined,
  NumberOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Form, Row, Typography, Space } from "antd";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHTextArea from "../../../components/form/PHTextArea";
import { z } from "zod";
import { TProduct } from "../../../types/bookManagement.type";
import { useAddProductMutation } from "../../../redux/features/book/productsApi";

const { Title } = Typography;

export default function CreateProduct() {
  const [createProduct] = useAddProductMutation();

  const onSubmit = async (data: TProduct) => {
    const toastId = toast.loading("Creating product...");
    try {
      const productData = {
        ...data,
        price: parseFloat(data.price),
        rating: parseFloat(data.rating),
        quantity: parseInt(data.quantity),
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
            <PHForm onSubmit={onSubmit} schema={createProductValidationSchema}>
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

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty("Name is required"),
    title: z.string().nonempty("Title is required"),
    category: z.string().nonempty("Category is required"),
    author: z.string().nonempty("Author is required"),
    description: z.string().nonempty("Description is required"),
    price: z.number().min(0, "Price must be a positive number"),
    image: z.string().url("Image must be a valid URL"),
    rating: z.number().min(1).max(5, "Rating must be between 1 and 5"),
    quantity: z.number().min(0, "Quantity must be a positive number"),
    isDeleted: z.boolean().optional().default(false),
  }),
});
