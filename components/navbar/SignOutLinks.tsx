'use client'

import { SignOutButton } from '@clerk/nextjs'
import { toast } from 'sonner'

const handleLogout = () => {
  toast.success('Logout Successfully', {
    duration: 1500,
    position: 'top-center',
  })
}

const SignOutLinks = () => {
  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleLogout}>Logout</button>
    </SignOutButton>
  )
}

export default SignOutLinks
