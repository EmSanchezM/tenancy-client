import { FC } from 'react'
import { Control } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { DatePicker } from '../ui/date-picker';

interface InputDateProps {
  control: Control<any>;
  label: string;
  name: string;
}

const InputDate: FC<InputDateProps> = ({ control, label, name }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-col'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <DatePicker {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}


export default InputDate