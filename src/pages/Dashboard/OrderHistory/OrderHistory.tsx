import { Fragment } from "react";
import { Col, Row, Table, Tag } from "antd";
import moment from "moment-timezone";
import { useGetUserOrderHistoryQuery } from "../../../redux/features/order/orderApi";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { ColumnType } from "antd/es/table"; // Import the required types

export interface TableData {
  key: string;
  paymentMethod: string;
  totalAmount: number;
  transactionId: string;
  orderDate: string;
  status: "pending" | "shipping" | "delivered" | "canceled";
  userName: string;
  userEmail: string;
}

export interface ShippingAddressDetails {
  name: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface OrderHistoryItem {
  paymentMethod?: string;
  status: "pending" | "shipping" | "delivered" | "canceled";
  totalAmount: number;
  transactionId: string;
  orderDate: string;
  userId: {
    name: string;
    email: string;
  };
}

export default function OrderHistory() {
  const user = useAppSelector(selectCurrentUser);
  const email = user?.email;
  const { data: orderHistoryData, isFetching } =
    useGetUserOrderHistoryQuery(email);

  const tableData: TableData[] =
    orderHistoryData?.data.map(
      ({
        paymentMethod,
        status,
        totalAmount,
        transactionId,
        orderDate,
        userId,
      }: OrderHistoryItem) => ({
        key: transactionId,
        paymentMethod,
        totalAmount,
        transactionId,
        orderDate: moment(orderDate).tz("Asia/Dhaka").format("DD-MM-YYYY"),
        status,
        userName: userId?.name,
        userEmail: userId?.email,
      })
    ) || [];

  const getStatusTag = (status: string) => {
    const statusColors: Record<string, string> = {
      pending: "yellow",
      shipping: "blue",
      delivered: "green",
      canceled: "red",
    };
    return (
      <Tag color={statusColors[status] || "gray"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Tag>
    );
  };

  const columns: ColumnType<TableData>[] = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      responsive: ["xs", "sm", "md", "lg", "xl"] as const, // Using `as const` ensures proper type inference
    },
    {
      title: "User Email",
      dataIndex: "userEmail",
      key: "userEmail",
      responsive: ["xs", "sm", "md", "lg", "xl"] as const,
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      responsive: ["xs", "sm", "md", "lg", "xl"] as const,
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (amount: number) => `$${amount.toFixed(2)}`,
      responsive: ["xs", "sm", "md", "lg", "xl"] as const,
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
      responsive: ["xs", "sm", "md", "lg", "xl"] as const,
    },
    {
      title: "Date",
      dataIndex: "orderDate",
      key: "orderDate",
      responsive: ["xs", "sm", "md", "lg", "xl"] as const,
    },
    {
      title: "Order Progress",
      dataIndex: "status",
      key: "status",
      render: (status: string) => getStatusTag(status),
      responsive: ["xs", "sm", "md", "lg", "xl"] as const,
    },
  ];

  return (
    <Fragment>
      <Row gutter={[20, 20]} justify="center">
        <Col xs={24} lg={24}>
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={false}
            scroll={{ x: "max-content" }}
            loading={isFetching}
            bordered
          />
        </Col>
      </Row>
    </Fragment>
  );
}
