'use client'

import FormInputs from '@/components/form/FormInputs'
import Buttons from '@/components/form/Buttons'
import { profileSchema } from '@/utils/schema'
import { handleProfileCreate } from '@/app/actions/actions'
import FormContainer from '@/components/form/FormContainer'

const CreateProfileClient = () => {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold capitalize">create profile</h1>
      <div className="rounded-md border p-8">
        <FormContainer
          schema={profileSchema}
          defaultValues={{
            firstname: '',
            lastname: '',
          }}
          onSubmitAction={handleProfileCreate}
          successMessage="Profile created successfully"
          errorMessage="Failed to create profile"
          redirectPath="/"
        >
          {(formMethods) => (
            <>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <FormInputs
                  register={formMethods.register('firstname')}
                  name="firstname"
                  label="firstname"
                  type="text"
                  placeholder="Input Your Firstname"
                  errors={formMethods.formState.errors}
                />
                <FormInputs
                  register={formMethods.register('lastname')}
                  name="lastname"
                  label="lastname"
                  type="text"
                  placeholder="Input Your Lastname"
                  errors={formMethods.formState.errors}
                />
              </div>
              <Buttons text="create profile" isPending={formMethods.formState.isSubmitting} />
            </>
          )}
        </FormContainer>
      </div>
    </section>
  )
}

export default CreateProfileClient
