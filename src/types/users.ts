export type TSignUp = {
  name?: string;
  email: string;
  password: string;
};

export type TUser = {
  email: string;
  name?: string;
  role: string;
  password: string;
  iat: number;
  exp: number;
  // profile update related additional fields
  profilePicture?: string;
  city?: string;
  address?: string;
  postalCode?: string;
  country?: string;
  gender?: "male" | "female";
  bio?: string;
  facebook?: string;
  website?: string;
};
