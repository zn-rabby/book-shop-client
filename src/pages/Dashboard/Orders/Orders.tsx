/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from "react";
import { Button, Col, Pagination, Row, Select, Space, Table } from "antd";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import { toast } from "sonner";
import { TQueryParam } from "../../../types/global";
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} from "../../../redux/features/order/orderApi";

export type ShippingAddress = {
  city: string;
  country: string;
};

export type User = {
  name: string;
  email: string;
};

export type OrderItem = {
  key: string;
  paymentMethod: string;
  totalAmount: number | undefined; // Allow undefined
  transactionId: string;
  shippingAddress: string;
  orderDate: string;
  status: "pending" | "shipping" | "delivered";
  userName: string;
  userEmail: string;
};

export default function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [params, setParams] = useState<TQueryParam[]>([]);

  const {
    data: ordersData,
    isFetching,
    refetch,
  } = useGetAllOrdersQuery([{ name: "page", value: currentPage }, ...params]);

  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  // Function to handle status update
  const handleOrderStatusUpdate = async (value: string, id: string) => {
    const toastId = toast.loading("Updating status...");
    try {
      await updateOrderStatus({ id: id, data: { status: value } }).unwrap();
      toast.success("Status has been successfully updated.", { id: toastId });
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Error updating status.", {
        id: toastId,
      });
    }
  };

  // Map the orders data to table-friendly format
  const tableData: OrderItem[] = ordersData?.data.map(
    ({
      paymentMethod,
      status,
      totalAmount,
      transactionId,
      shippingAddress,
      orderDate,
      userId,
      _id,
    }) => ({
      key: _id,
      paymentMethod,
      totalAmount,
      transactionId,
      shippingAddress: `${shippingAddress?.address}, ${shippingAddress?.city}`,
      orderDate: moment(orderDate).tz("Asia/Dhaka").format("YYYY-MMM-DD"),
      status,
      userName: userId?.name,
      userEmail: userId?.email,
    })
  );

  const metaData = ordersData?.meta;

  const columns = [
    {
      title: "Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Email",
      dataIndex: "userEmail",
      key: "userEmail",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (amount: number | undefined) => {
        // Ensure amount is a valid number, otherwise default to 0
        const formattedAmount = amount ? amount.toFixed(2) : "0.00";
        return `$${formattedAmount}`;
      },
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
    },
    {
      title: "Order Progress",
      dataIndex: "status",
      key: "status",
      render: (status: string, record: OrderItem) => (
        <Select
          defaultValue={status}
          style={{ width: 120 }}
          onChange={(value) => handleOrderStatusUpdate(value, record.key)}
        >
          <Select.Option value="pending">Pending</Select.Option>
          <Select.Option value="shipping">Shipping</Select.Option>
          <Select.Option value="delivered">Delivered</Select.Option>
        </Select>
      ),
      filters: [
        { text: "Pending", value: "pending" },
        { text: "Shipping", value: "shipping" },
        { text: "Delivered", value: "delivered" },
      ],
    },
    {
      title: "Shipping Address",
      dataIndex: "shippingAddress",
      key: "shippingAddress",
    },
    // {
    //   title: "Action",
    //   dataIndex: "",
    //   key: "x",
    //   render: (item: OrderItem) => (
    //     <Space>
    //       <Link to={`/orders/${item.key}`}>
    //         <Button>Details</Button>
    //       </Link>
    //     </Space>
    //   ),
    //   width: "1%",
    // },
  ];

  const onChange = (_pagination, filters, _sorter, extra) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];
      filters.status?.forEach((item) =>
        queryParams.push({ name: "status", value: item })
      );
      setParams(queryParams);
    }
  };

  return (
    <Fragment>
      <div style={{ width: "100%", margin: "0 auto", padding: "20px" }}>
        <Row gutter={[20, 20]}>
          <Col xs={24}>
            <div
              style={{
                minHeight: "80vh",
                overflowY: "auto",
              }}
            >
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                scroll={{ x: "max-content" }}
                loading={isFetching}
                onChange={onChange}
                style={{ height: "100%" }}
              />
              <Pagination
                style={{ marginTop: "20px" }}
                align="end"
                current={currentPage}
                onChange={(page) => setCurrentPage(page)}
                pageSize={metaData?.limit}
                total={metaData?.total}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
