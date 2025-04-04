'use client'

import FormInputs from '@/components/form/FormInputs'
import Buttons from '@/components/form/Buttons'
import { useForm, type FieldValues } from 'react-hook-form'
import { profileSchema } from '@/utils/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

const CreateProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
    },
  })

  const onSubmit = async (data: FieldValues) => {
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)

    toast.success('Profile created successfully', {
      description: 'Your profile has been created.',
      duration: 1500,
      position: 'top-center',
    })

    reset()
  }

  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold capitalize">create profile</h1>
      <div className="rounded-md border p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <FormInputs
              register={register('firstname')}
              name="firstname"
              type="text"
              placeholder="Input Your Firstname"
              errors={errors}
            />
            <FormInputs
              register={register('lastname')}
              name="lastname"
              type="text"
              placeholder="Input Your Lastname"
              errors={errors}
            />
          </div>

          <Buttons text="create profile" isPending={isSubmitting} />
        </form>
      </div>
    </section>
  )
}

export default CreateProfile
