'use client'

import FormInputs from '@/components/form/FormInputs'
import Buttons from '@/components/form/Buttons'
import { landmarkSchema } from '@/utils/schema'
import { handleLandmarkCreate } from '@/app/actions/actions'
import FormContainer from '@/components/form/FormContainer'

const CreateLandmark = () => {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold capitalize">create landmark</h1>
      <div className="rounded-md border p-8">
        <FormContainer
          schema={landmarkSchema}
          defaultValues={{
            name: '',
          }}
          onSubmitAction={handleLandmarkCreate}
          successMessage="Landmark created successfully"
          errorMessage="Failed to create Landmark"
        >
          {(formMethods) => (
            <>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <FormInputs
                  register={formMethods.register('name')}
                  name="name"
                  label="landmark name"
                  type="text"
                  placeholder="Input Your Landmark Name"
                  errors={formMethods.formState.errors}
                />
              </div>
              <Buttons text="create landmark" isPending={formMethods.formState.isSubmitting} />
            </>
          )}
        </FormContainer>
      </div>
    </section>
  )
}

export default CreateLandmark
