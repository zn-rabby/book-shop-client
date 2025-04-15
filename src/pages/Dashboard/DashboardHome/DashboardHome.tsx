import {
  Card,
  Row,
  Col,
  Typography,
  Statistic,
  Spin,
  Space,
  Tag,
  Table,
  Progress,
  Badge,
} from "antd";
import {
  UserOutlined,
  BookOutlined,
  //   ShoppingCartOutlined,
  DollarOutlined,
  SolutionOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useGetAllBooksQuery } from "../../../redux/features/book/bookManagement";
import { useGetAllOrdersQuery } from "../../../redux/features/order/orderApi";
import { useGetAllProductsQuery } from "../../../redux/features/book/productsApi";
import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";
import {
  BarChart,
  PieChart,
  Bar,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TUser } from "../../../types/users";

const { Title, Text } = Typography;

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const STATUS_COLORS = {
  completed: "#52c41a",
  pending: "#faad14",
  cancelled: "#f5222d",
  processing: "#1890ff",
};

const DashboardHome = () => {
  const user = useSelector((state: RootState) => state.auth.user) as TUser;
  const isAdmin = user?.role === "admin";
  const isUser = user?.role === "user";

  //   const {
  //     data: ordersData,

  //   } = useGetAllOrdersQuery([ ]);

  // Data fetching
  const { data: booksData, isLoading: booksLoading } =
    useGetAllBooksQuery(undefined);

  const { data: ordersData } = useGetAllOrdersQuery([{ name: "page" }]);
  //   console.log(75, ordersData, "ordersData");
  const { data: usersData, isLoading: usersLoading } = useGetAllUsersQuery([
    { name: "page" },
  ]);

  const { data: productsData, isLoading: productsLoading } =
    useGetAllProductsQuery({});
  //   const { data: usersData, isLoading: usersLoading } = useGetAllUsersQuery({});
  console.log(76, usersData, "usersData");
  // Filter and process data
  const userOrders = isUser
    ? ordersData?.data?.filter((order) => order.user === user?._id)
    : [];

  const recentOrders = isAdmin
    ? ordersData?.data?.slice(0, 5)
    : userOrders?.slice(0, 5);

  // Calculate status counts
  const statusCounts = ordersData?.data?.reduce(
    (acc: Record<string, number>, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    },
    {}
  );

  // Stats data with status information
  const stats = {
    books: booksData?.data?.length || 0,
    products: productsData?.data?.length || 0,
    users: usersData?.data?.length || 0,
    // orders: isAdmin ? ordersData?.data?.length || 0 : userOrders?.length || 0,
    orders: ordersData?.data?.length,
    userBooks:
      userOrders?.reduce((acc, order) => acc + (order.books?.length || 0), 0) ||
      0,
    completedOrders: statusCounts?.completed || 0,
    pendingOrders: statusCounts?.pending || 0,
    cancelledOrders: statusCounts?.cancelled || 0,
    processingOrders: statusCounts?.processing || 0,
  };
  console.log(stats, "stats");

  // Chart data
  const salesData = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3000 },
    { name: "Mar", value: 2000 },
    { name: "Apr", value: 2780 },
    { name: "May", value: 1890 },
    { name: "Jun", value: 2390 },
  ];

  const inventoryData = [
    { name: "Books", value: stats.books },
    { name: "Products", value: stats.products },
    ...(isAdmin ? [{ name: "Users", value: stats.users }] : []),
    { name: "Orders", value: stats.orders },
  ];

  const statusData = [
    { name: "Completed", value: stats.completedOrders },
    { name: "Processing", value: stats.processingOrders },
    { name: "Pending", value: stats.pendingOrders },
    { name: "Cancelled", value: stats.cancelledOrders },
  ];

  // Table columns
  const orderColumns = [
    {
      title: "Order ID",
      dataIndex: "_id",
      key: "_id",
      render: (id: string) => (
        <Text copyable className="font-mono">
          {id.slice(0, 8)}...
        </Text>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "date",
      render: (date: string) => (
        <Text className="whitespace-nowrap">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Text>
      ),
    },
    {
      title: "Amount",
      dataIndex: "total",
      key: "amount",
      render: (amount: number) => (
        <Text strong className="text-green-600">
          ${amount}
        </Text>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          icon={
            status === "completed" ? (
              <CheckCircleOutlined />
            ) : status === "processing" ? (
              <SyncOutlined spin />
            ) : status === "cancelled" ? (
              <CloseCircleOutlined />
            ) : null
          }
          color={
            STATUS_COLORS[status as keyof typeof STATUS_COLORS] || "default"
          }
          className="capitalize flex items-center gap-1"
        >
          {status}
        </Tag>
      ),
    },
  ];

  if (booksLoading || productsLoading || (isAdmin && usersLoading)) {
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
      {/* Header */}
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

      {/* Stats Cards */}
      <Row gutter={[16, 16]} className="mb-8">
        {isAdmin && (
          <>
            <Col xs={24} sm={12} md={6}>
              <Card className="shadow-md border-0 rounded-lg hover:shadow-lg transition-shadow">
                <Statistic
                  title={<span className="text-gray-600">Total Books</span>}
                  value={stats.books}
                  prefix={<BookOutlined className="text-blue-500" />}
                  valueStyle={{ color: "#3f8600", fontSize: 24 }}
                  className="font-medium"
                />
              </Card>
            </Col>
            {/* <Col xs={24} sm={12} md={6}>
              <Card className="shadow-md border-0 rounded-lg hover:shadow-lg transition-shadow">
                <Statistic
                  title={<span className="text-gray-600">Total Products</span>}
                  value={stats.products}
                  prefix={<ShoppingCartOutlined className="text-purple-500" />}
                  valueStyle={{ color: "#1890ff", fontSize: 24 }}
                />
              </Card>
            </Col> */}
            <Col xs={24} sm={12} md={6}>
              <Card className="shadow-md border-0 rounded-lg hover:shadow-lg transition-shadow">
                <Statistic
                  title={<span className="text-gray-600">Total Users</span>}
                  value={stats.users}
                  prefix={<UserOutlined className="text-green-500" />}
                  valueStyle={{ color: "#722ed1", fontSize: 24 }}
                />
              </Card>
            </Col>
          </>
        )}
        <Col xs={24} sm={12} md={isAdmin ? 6 : 12}>
          <Card className="shadow-md border-0 rounded-lg hover:shadow-lg transition-shadow">
            <Statistic
              title={
                <span className="text-gray-600">
                  {isAdmin ? "Total Orders" : "Your Orders"}
                </span>
              }
              value={stats.orders}
              prefix={<DollarOutlined className="text-yellow-500" />}
              valueStyle={{ color: "#faad14", fontSize: 24 }}
            />
          </Card>
        </Col>
        {isUser && (
          <Col xs={24} sm={12} md={12}>
            <Card className="shadow-md border-0 rounded-lg hover:shadow-lg transition-shadow">
              <Statistic
                title={<span className="text-gray-600">Books Purchased</span>}
                value={stats.userBooks}
                prefix={<BookOutlined className="text-teal-500" />}
                valueStyle={{ color: "#13c2c2", fontSize: 24 }}
              />
            </Card>
          </Col>
        )}
      </Row>

      {/* Status Overview */}
      {isAdmin && (
        <Row gutter={[16, 16]} className="mb-8">
          <Col span={24}>
            <Card
              title="Order Status Overview"
              className="shadow-md border-0 rounded-lg"
              extra={
                <Badge
                  count={stats.orders}
                  style={{ backgroundColor: "#1890ff" }}
                />
              }
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={statusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) =>
                          `${name}: ${percent * 100}%`
                        }
                      >
                        {statusData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              STATUS_COLORS[
                                entry.name.toLowerCase() as keyof typeof STATUS_COLORS
                              ] || "#d9d9d9"
                            }
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value} orders`, "Count"]}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </Col>
                <Col xs={24} md={12}>
                  <Space direction="vertical" size="middle" className="w-full">
                    {statusData.map((status) => (
                      <div key={status.name}>
                        <div className="flex justify-between mb-1">
                          <Text>{status.name}</Text>
                          <Text strong>
                            {status.value} (
                            {Math.round((status.value / stats.orders) * 100)}%)
                          </Text>
                        </div>
                        <Progress
                          percent={Math.round(
                            (status.value / stats.orders) * 100
                          )}
                          strokeColor={
                            STATUS_COLORS[
                              status.name.toLowerCase() as keyof typeof STATUS_COLORS
                            ]
                          }
                          showInfo={false}
                          strokeLinecap="round"
                        />
                      </div>
                    ))}
                  </Space>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      )}

      {/* Charts */}
      <Row gutter={[16, 16]} className="mb-8">
        <Col xs={24} md={isAdmin ? 12 : 24}>
          <Card
            title={isAdmin ? "Monthly Revenue" : "Your Spending History"}
            className="shadow-md border-0 rounded-lg"
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [
                    `$${value}`,
                    isAdmin ? "Revenue" : "Amount",
                  ]}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Legend />
                <Bar
                  dataKey="value"
                  fill="#8884d8"
                  name={isAdmin ? "Revenue" : "Amount"}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        {isAdmin && (
          <Col xs={24} md={12}>
            <Card
              title="Inventory Distribution"
              className="shadow-md border-0 rounded-lg"
            >
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={inventoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${percent * 100}%`}
                  >
                    {inventoryData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} items`, "Count"]} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        )}
      </Row>

      {/* Recent Orders Table */}
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card
            title={isAdmin ? "Recent Transactions" : "Your Recent Orders"}
            className="shadow-md border-0 rounded-lg"
            extra={<Tag color="blue">{recentOrders?.length || 0} records</Tag>}
          >
            <Table
              columns={orderColumns}
              dataSource={recentOrders}
              rowKey="_id"
              pagination={false}
              size="middle"
              className="rounded-lg overflow-hidden"
              scroll={{ x: true }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardHome;
