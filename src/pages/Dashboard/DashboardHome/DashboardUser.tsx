import { Card, Row, Col, Typography, Statistic, Spin, Space, Tag } from "antd";
import { UserOutlined, SolutionOutlined } from "@ant-design/icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useGetUserOrderHistoryQuery } from "../../../redux/features/order/orderApi";

const { Title, Text } = Typography;

const DashboardUser = () => {
  const user = useAppSelector(selectCurrentUser);
  const email = user?.email;
  const isAdmin = user?.role === "admin";

  const { data: orderHistoryData, isFetching } =
    useGetUserOrderHistoryQuery(email);

  const stats = {
    orders: orderHistoryData?.data?.length || 0,
    completedOrders:
      orderHistoryData?.data?.filter((order) => order.status === "completed")
        .length || 0,
    pendingOrders:
      orderHistoryData?.data?.filter((order) => order.status === "pending")
        .length || 0,
    cancelledOrders:
      orderHistoryData?.data?.filter((order) => order.status === "cancelled")
        .length || 0,
    processingOrders:
      orderHistoryData?.data?.filter((order) => order.status === "processing")
        .length || 0,
  };

  const barChartData = [
    { name: "Completed", value: stats.completedOrders },
    { name: "Pending", value: stats.pendingOrders },
    { name: "Cancelled", value: stats.cancelledOrders },
    { name: "Processing", value: stats.processingOrders },
  ];

  if (isFetching) {
    return (
      <Spin
        size="large"
        className="flex justify-center items-center h-screen"
        tip="Loading dashboard..."
      />
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <Space align="center" className="mb-2">
          <Title level={2} className="m-0 font-bold text-gray-800">
            Welcome back, {user?.name}!
          </Title>
          <Tag
            color={isAdmin ? "gold" : "blue"}
            icon={isAdmin ? <SolutionOutlined /> : <UserOutlined />}
            className="text-sm font-medium"
          >
            {isAdmin ? "Administrator" : "Customer"}
          </Tag>
        </Space>
        <Text type="secondary" className="text-gray-500">
          {isAdmin ? "Your store at a glance" : "Your recent activity summary"}
        </Text>
      </div>

      {isAdmin ? (
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic title="Total Orders" value={stats.orders} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Completed Orders"
                value={stats.completedOrders}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic title="Pending Orders" value={stats.pendingOrders} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Cancelled Orders"
                value={stats.cancelledOrders}
              />
            </Card>
          </Col>
        </Row>
      ) : (
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <Card title="Order Status Overview">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default DashboardUser;
