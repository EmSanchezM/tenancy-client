import { FC } from 'react';
import { Control } from 'react-hook-form';
import Barcode from 'react-barcode';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';

interface InputBarCodeFieldProps {
  control: Control<any>;
  label: string;
  name: string;
  type: 'text';
}

const InputBarCodeField: FC<InputBarCodeFieldProps> = ({ control, label, name, type }) => {
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
          <Barcode value={field.value ?? 'Generar codigo'} />
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default InputBarCodeField