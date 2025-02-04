/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

// Define your TProduct type with all the fields
type TProduct = {
  _id: string;
  name: string;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  quantity: number;
};

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  onSubmit: SubmitHandler<TProduct>; // Change here to use TProduct instead of FieldValues
  children: ReactNode;
} & TFormConfig;

const PHForm = ({ onSubmit, children, defaultValues }: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm<TProduct>(formConfig); // Also ensure useForm is typed with TProduct

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
