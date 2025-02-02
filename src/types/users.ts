export type TSignUp = {
  name: string;
  email: string;
  password: string;
};

export type TUser = {
  email: string;
  name: string;
  role: string;
  password: string;
  iat: number;
  exp: number;
};
