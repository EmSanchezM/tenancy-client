import { FC } from "react";
import { Control } from "react-hook-form";

import InputField from "./input-field";
import InputSwitch from "./input-switch";
import InputSelect from "./input-select";
import InputDate from "./input-date";
import InputTextArea from "./input-textarea";

interface FormFieldProps {
  control: Control<any>;
  label: string;
  name: string;
  type: "text" | "number" | "email" | "switch" | "textarea" | "select" | "date";
  items?: { id: string; name: string; }[];
}

const FormField: FC<FormFieldProps> = ({ type, label, name, items, control }) => {
  switch (type) {
    case 'text':
    case 'number':
    case 'email':
      return (
        <InputField type={type} label={label} name={name} control={control} />
      );
    case 'textarea':
      return (
        <InputTextArea label={label} name={name} control={control} />
      );
    case 'switch':
      return (<InputSwitch label={label} name={name} control={control} />)
    case 'select':
      return (<InputSelect label={label} name={name} items={items!} control={control} />)
    case 'date':
      return (<InputDate label={label} name={name} control={control} />)
  }
};
export default FormField;
