import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import CreateProfileClient from './CreateProfileClient'

export default async function CreateProfile() {
  const user = await currentUser()
  if (user?.privateMetadata.hasProfile) {
    redirect('/')
  }

  return <CreateProfileClient />
}
