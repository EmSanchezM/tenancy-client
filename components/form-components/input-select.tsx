import { FC } from 'react'
import { Control } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface InputSelectProps {
  control: Control<any>;
  label: string;
  name: string;
  items: { id: string; name: string; }[]
}

const InputSelect: FC<InputSelectProps> = ({ control, label, name, items }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue defaultValue={field.value} placeholder={`Selecciona un ${label.toLowerCase()}`} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item) => (
                <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default InputSelect