import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "user0@gmail.com",
      password: "user0",
    },
  });

  const [login, { error }] = useLoginMutation();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    console.log(data);

    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.token);

    dispatch(setUser({ user: user, token: res.data.token }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
        />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          {...register("password", { required: "Password is required" })}
        />
      </div>

      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
