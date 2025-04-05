'use client'

import { useForm, type FieldValues, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { type ZodSchema } from 'zod'
import { useRouter } from 'next/navigation'

type FormContainerProps = {
  schema: ZodSchema
  defaultValues: Record<string, unknown>
  onSubmitAction: (data: FieldValues) => Promise<{ success: boolean }>
  children: (formMethods: UseFormReturn) => React.ReactNode
  successMessage?: string
  errorMessage?: string
  redirectPath?: string
}

const FormContainer = ({
  schema,
  defaultValues,
  onSubmitAction,
  children,
  successMessage = 'Operation completed successfully',
  errorMessage = 'Something went wrong',
  redirectPath,
}: FormContainerProps) => {
  const formMethods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })
  const router = useRouter()

  const { handleSubmit, reset, setValue } = formMethods

  const onSubmit = async (data: FieldValues) => {
    try {
      const result = await onSubmitAction(data)
      if (result.success) {
        toast.success(successMessage, {
          duration: 1500,
          position: 'top-center',
        })
        reset()
        if (redirectPath) {
          router.push(redirectPath) // redirect หลังจากสำเร็จ
        }
      }
    } catch (error) {
      // ตรวจสอบว่า error เป็น instance ของ Error และมี message
      const message = error instanceof Error ? error.message : errorMessage
      toast.error(message, {
        duration: 1500,
        position: 'top-center',
      })
    }
  }

  return <form onSubmit={handleSubmit(onSubmit)}>{children(formMethods)}</form>
}

export default FormContainer
