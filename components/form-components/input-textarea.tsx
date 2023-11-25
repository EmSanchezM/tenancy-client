import { FC } from 'react';
import { Control } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';

interface InputTextAreaProps {
  control: Control<any>;
  label: string;
  name: string;
}

const InputTextArea: FC<InputTextAreaProps> = ({ control, label, name }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default InputTextArea