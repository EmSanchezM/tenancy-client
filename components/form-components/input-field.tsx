import { FC } from 'react';
import { Control } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';

interface InputFieldProps {
  control: Control<any>;
  label: string;
  name: string;
  type: 'text' | 'number' | 'email';
}

const InputField: FC<InputFieldProps> = ({ control, label, name, type }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default InputField