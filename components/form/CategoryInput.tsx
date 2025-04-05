import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { categories } from '@/utils/categories'
import { UseFormRegisterReturn } from 'react-hook-form'

type CategoryInputProps = {
  register: UseFormRegisterReturn<string>
  name: string
  label: string
  setValue: any
}

const CategoryInput = ({ register, name, label, setValue }: CategoryInputProps) => {
  return (
    <div>
      <input hidden {...register(name)} />

      <Label htmlFor={name} className="mb-2 capitalize">
        {label}
      </Label>

      <Select onValueChange={(value) => setValue(name, value)} required>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Please Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item, index) => {
            return (
              <SelectItem key={index} value={item.label}>
                <span className="flex items-center gap-2">
                  <item.icon />
                  <p className="capitalize">{item.label}</p>
                </span>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
export default CategoryInput
