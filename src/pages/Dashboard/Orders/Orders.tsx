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
  totalAmount: number | undefined;
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

  const handleOrderStatusUpdate = async (value: string, id: string) => {
    const toastId = toast.loading("Updating status...");
    try {
      await updateOrderStatus({ id: id, data: { status: value } }).unwrap();
      toast.success("Status successfully updated.", { id: toastId });
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Error updating status.", {
        id: toastId,
      });
    }
  };

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
    { title: "Name", dataIndex: "userName", key: "userName" },
    { title: "Email", dataIndex: "userEmail", key: "userEmail" },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (amount: number | undefined) =>
        `$${amount ? amount.toFixed(2) : "0.00"}`,
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    { title: "Order Date", dataIndex: "orderDate", key: "orderDate" },
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
      <div className="p-6 min-h-screen bg-gray-100">
        <Row gutter={[20, 20]} justify="center">
          <Col xs={24}>
            <div className="bg-white p-6 shadow-md rounded-lg overflow-auto">
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                scroll={{ x: "max-content" }}
                loading={isFetching}
                onChange={onChange}
              />
              <Pagination
                className="mt-4 flex justify-end"
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
