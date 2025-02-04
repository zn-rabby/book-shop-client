/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from "react";
import {
  Col,
  Row,
  Table,
  Select,
  Button,
  Pagination,
  Tooltip,
  Card,
  Space,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import moment from "moment-timezone";
import { toast } from "sonner";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation,
} from "../../../redux/features/user/userApi";
import { TQueryParam } from "../../../types/global";

export type User = {
  _id: string;
  key?: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "banned";
  createdAt: string;
};

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [params, setParams] = useState<TQueryParam[]>([]);

  const {
    data: usersData,
    isFetching,
    refetch,
  } = useGetAllUsersQuery([{ name: "page", value: currentPage }, ...params]);

  const [updateUserRole] = useUpdateUserRoleMutation();
  const [updateUserStatus] = useUpdateUserStatusMutation();
  const [deleteUser] = useDeleteUserMutation();

  const tableData = (usersData?.data || []).map(
    ({ name, role, email, createdAt, status, _id }) => ({
      key: _id,
      name,
      email,
      role,
      status,
      createdAt: moment.tz(createdAt, "Asia/Dhaka").format("YYYY MMM DD"),
    })
  );

  // Handle role update
  const handleRoleUpdate = async (value: string, userId: string) => {
    const toastId = toast.loading("Updating role...");
    try {
      await updateUserRole({ id: userId, data: { role: value } }).unwrap();
      toast.success("Role updated successfully.", { id: toastId });
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Error updating role.", {
        id: toastId,
      });
    }
  };

  // Handle status update
  const handleStatusUpdate = async (value: string, userId: string) => {
    const toastId = toast.loading("Updating status...");
    try {
      await updateUserStatus({ id: userId, data: { status: value } }).unwrap();
      toast.success("Status updated successfully.", { id: toastId });
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Error updating status.", {
        id: toastId,
      });
    }
  };

  // Handle user deletion
  const handleDeleteUser = async (userId: string) => {
    const toastId = toast.loading("Deleting user...");
    try {
      await deleteUser(userId).unwrap();
      toast.success("User deleted successfully.", { id: toastId });
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Error deleting user.", {
        id: toastId,
      });
    }
  };

  const metaData = usersData?.meta;

  const columns = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "User Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "User Role",
      dataIndex: "role",
      key: "role",
      render: (role: string, record: { key: string }) => (
        <Select
          defaultValue={role}
          style={{ width: 120 }}
          onChange={(value) => handleRoleUpdate(value, record.key)}
        >
          <Select.Option value="admin">Admin</Select.Option>
          <Select.Option value="user">User</Select.Option>
        </Select>
      ),
      filters: [
        { text: "Admin", value: "admin" },
        { text: "User", value: "user" },
      ],
    },
    {
      title: "User Status",
      dataIndex: "status",
      key: "status",
      render: (status: string, record: { key: string }) => (
        <Select
          defaultValue={status}
          style={{ width: 120 }}
          onChange={(value) => handleStatusUpdate(value, record.key)}
        >
          <Select.Option value="active">Active</Select.Option>
          <Select.Option value="block">Block</Select.Option>
        </Select>
      ),
      filters: [
        { text: "Active", value: "active" },
        { text: "Block", value: "block" },
      ],
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: { key: string }) => (
        <Tooltip title="Delete User">
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteUser(record.key)}
          />
        </Tooltip>
      ),
    },
  ];

  const onChange = (_pagination, filters, _sorter, extra) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];
      filters.role?.forEach((item) =>
        queryParams.push({ name: "role", value: item })
      );
      filters.status?.forEach((item) =>
        queryParams.push({ name: "status", value: item })
      );
      setParams(queryParams);
    }
  };

  return (
    <Fragment>
      <div style={{ width: "100%", margin: "0 auto", padding: "5px" }}>
        <Row gutter={[20, 20]}>
          <Col xs={24}>
            <Card
              title="User Management"
              bordered={false}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                scroll={{ x: "max-content" }}
                loading={isFetching}
                onChange={onChange}
                style={{ width: "100%" }}
              />
              <Space
                style={{
                  marginTop: "10px",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <Pagination
                  current={currentPage}
                  onChange={(page) => setCurrentPage(page)}
                  pageSize={metaData?.limit}
                  total={metaData?.total}
                  showSizeChanger={false}
                />
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
