import { FC } from 'react';
import { Control } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Switch } from '../ui/switch';

interface InputSwitchProps {
  control: Control<any>;
  label: string;
  name: string;
}

const InputSwitch: FC<InputSwitchProps> = ({ control, label, name }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Switch {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default InputSwitch