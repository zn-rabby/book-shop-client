import { Input } from "antd";
import { Controller } from "react-hook-form";

const { TextArea } = Input;

type TTextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
};

const PHTextArea = ({ name, label, rows = 4 }: TTextAreaProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <Controller
        name={name}
        render={({ field }) => <TextArea {...field} id={name} rows={rows} />}
      />
    </div>
  );
};

export default PHTextArea;
