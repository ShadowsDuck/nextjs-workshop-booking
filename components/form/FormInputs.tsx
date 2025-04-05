import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { type UseFormRegisterReturn, type FieldErrors } from 'react-hook-form'

interface FormInputsProps {
  register: UseFormRegisterReturn<string>
  name: string
  label: string
  type: string
  placeholder: string
  errors: FieldErrors
}

const FormInputs = ({ register, name, label, type, placeholder, errors }: FormInputsProps) => {
  return (
    <div>
      <Label htmlFor={label} className="mb-2 capitalize">
        {label}
      </Label>
      <Input
        {...register}
        type={type}
        placeholder={placeholder}
        className={`${errors[name] && 'border-red-500'}`}
      />
      {errors[name]?.message && typeof errors[name].message === 'string' && (
        <span className="text-sm text-red-500">{errors[name].message}</span>
      )}
    </div>
  )
}

export default FormInputs
