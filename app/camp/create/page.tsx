'use client'

import FormInputs from '@/components/form/FormInputs'
import Buttons from '@/components/form/Buttons'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { landmarkSchema } from '@/utils/schema'
import { handleLandmarkCreate } from '@/app/actions/actions'
import CategoryInput from '@/components/form/CategoryInput'

const CreateLandmark = () => {
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(landmarkSchema),
    defaultValues: {
      name: '',
      category: '',
    },
  })
  const { errors, isSubmitting } = formState

  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold capitalize">create landmark</h1>
      <div className="rounded-md border p-8">
        <form onSubmit={handleSubmit(handleLandmarkCreate)}>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <FormInputs
              register={register('name')}
              name="name"
              label="landmark name"
              type="text"
              placeholder="Input Your Landmark Name"
              errors={errors}
            />

            {/* category */}
            <CategoryInput
              register={register('category')}
              name="category"
              label="category"
              setValue={setValue}
            />
          </div>
          <Buttons text="create landmark" isPending={isSubmitting} />
        </form>
      </div>
    </section>
  )
}

export default CreateLandmark
