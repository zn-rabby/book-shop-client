import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";

export default function Users() {
  const { data: users } = useGetAllUsersQuery(undefined);
  console.log(users);
  return (
    <>
      <h2>HU</h2>
    </>
  );
}
