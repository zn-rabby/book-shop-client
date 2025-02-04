// import { Input } from "antd";
// import { Controller } from "react-hook-form";

// type TInputProps = {
//   type: string;
//   name: string;
//   label?: string;
// };

// const PHInput = ({ type, name, label }: TInputProps) => {
//   return (
//     <div style={{ marginBottom: "20px" }}>
//       {label ? label : null}
//       <Controller
//         name={name}
//         render={({ field }) => <Input {...field} type={type} id={name} />}
//       />
//     </div>
//   );
// };

// export default PHInput;

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type PHInputProps = {
  name: string;
  label: string;
  type?: string;
};

export default function PHInput({ name, label, type = "text" }: PHInputProps) {
  const { control } = useFormContext();

  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} type={type} />}
      />
    </div>
  );
}
