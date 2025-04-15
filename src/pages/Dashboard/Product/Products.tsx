/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from "react";
import {
  Button,
  Col,
  Pagination,
  Row,
  Space,
  Table,
  Card,
  Typography,
  Popconfirm,
} from "antd";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { TQueryParam } from "../../../types/global";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../../redux/features/book/productsApi";

export type ProductItem = {
  key: string;
  title: string;
  category: string;
  author: string;
  price: string;
  image: string;
  language: string;
  quantity: number;
};

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [params] = useState<TQueryParam[]>([]);

  const { data: productsData, isFetching } = useGetAllProductsQuery([
    { name: "page", value: currentPage },
    { name: "limit", value: 6 },
    ...params,
  ]);

  const [deleteProduct] = useDeleteProductMutation();

  // Function to handle product deletion
  const handleDeleteProduct = async (id: string) => {
    const toastId = toast.loading("Deleting product...");

    try {
      await deleteProduct(id).unwrap();
      toast.success("Product has been successfully deleted.", { id: toastId });
    } catch (err: any) {
      toast.error(
        err?.data?.message || "There was an issue while deleting the product.",
        { id: toastId }
      );
    }
  };

  const tableData = productsData?.data.map(
    ({ name, title, category, author, price, image, _id, quantity }) => ({
      key: _id,
      name,
      title,
      category,
      author,
      price,
      image,
      quantity,
    })
  );

  const metaData = productsData?.meta;
  console.log(metaData);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (imageLink: string) => (
        <img
          src={imageLink}
          alt="Product"
          style={{
            width: 50,
            height: 50,
            borderRadius: "5px",
            objectFit: "cover",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
          }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a: { name: string }, b: { name: any }) =>
        a.name.localeCompare(b.name),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a: { title: string }, b: { title: any }) =>
        a.title.localeCompare(b.title),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      onFilter: (value: any, record: { category: string | any[] }) =>
        record.category.includes(value),
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: string) => `$${price}`,
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (item: ProductItem) => {
        return (
          <Space>
            <Link to={`/dashboard/products/${item.key}`}>
              <Button type="primary" icon={<EyeOutlined />} />
            </Link>
            <Link to={`/dashboard/products/update/${item.key}`}>
              <Button type="default" icon={<EditOutlined />} />
            </Link>
            <Popconfirm
              title="Are you sure to delete this product?"
              onConfirm={() => handleDeleteProduct(item.key)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger icon={<DeleteOutlined />} />
            </Popconfirm>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  return (
    <Fragment>
      <div style={{ width: "100%", margin: "0 auto", padding: "5px" }}>
        <Row gutter={[20, 20]}>
          <Col xs={24}>
            <Card
              title={
                <Typography.Title level={3}>Product List</Typography.Title>
              }
              bordered={false}
              style={{
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                scroll={{ x: "max-content" }}
                loading={isFetching}
                // onChange={onChange}
                style={{ height: "100%" }}
              />
              <Pagination
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
                current={currentPage}
                onChange={(page) => setCurrentPage(page)}
                pageSize={metaData?.limit}
                total={metaData?.total}
                showSizeChanger={false}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
