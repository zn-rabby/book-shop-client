import { Fragment } from "react";
import { Col, Row, Table, Tag } from "antd";
import moment from "moment-timezone";
import { useGetUserOrderHistoryQuery } from "../../../redux/features/order/orderApi";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

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

  const columns = [
    { title: "User Name", dataIndex: "userName", key: "userName" },
    { title: "User Email", dataIndex: "userEmail", key: "userEmail" },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (amount: number) => `$${amount.toFixed(2)}`,
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    { title: "Date", dataIndex: "orderDate", key: "orderDate" },
    {
      title: "Order Progress",
      dataIndex: "status",
      key: "status",
      render: (status: string) => getStatusTag(status),
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
          />
        </Col>
      </Row>
    </Fragment>
  );
}
