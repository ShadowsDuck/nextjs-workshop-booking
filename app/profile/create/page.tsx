'use client'

import FormInputs from '@/components/form/FormInputs'
import PendingButton from '@/components/form/PendingButton'
import { useForm, type FieldValues } from 'react-hook-form'
import { profileSchema } from '@/utils/schema'
import { zodResolver } from '@hookform/resolvers/zod'

const CreateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(profileSchema) })

  const onSubmit = async (data: FieldValues) => {
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
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

          <PendingButton text="create profile" isPending={isSubmitting} />
        </form>
      </div>
    </section>
  )
}

export default CreateProfile
