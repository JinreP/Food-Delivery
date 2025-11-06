export type AddProps = {
  text: string;
};

export type ArrayPropsTypes = {
  title: string;
  price: number;
  length: number;
};

export type CategoryTypes = {
  _id: string;
  category: string;
};

export type FoodsTypes = {
  _id?: string;
  category: string | CategoryTypes;
  food: string;
  price: number;
  image: string;
  ingredients: string;
};

export type AccountLoginTypes = {
  email: string;
  setEmail: string;
  emailError: string;
  setEmailError: string;
};

export type UserTypes = {
  email: string;
  password: string;
};
