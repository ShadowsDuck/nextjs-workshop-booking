'use server'

import { clerkClient, currentUser } from "@clerk/nextjs/server"
import { FieldValues } from "react-hook-form"
import db from "@/utils/db"
import { redirect } from "next/navigation"

const getAuthUser = async () => {
  const user = await currentUser()
  if (!user) {
    throw new Error('User not found')
  }
  if (!user.privateMetadata.hasProfile) {
    redirect('/profile/create')
  }
  return user
}

export const handleProfileCreate = async (data: FieldValues) => {
  try {
    const user = await currentUser()
    if (!user) {
      throw new Error('Please sign in')
    }

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? '',
        firstname: data.firstname,
        lastname: data.lastname,
      }
    })
    const client = await clerkClient()
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true
      }
    })

    return { success: true }
  } catch {
    throw new Error('Failed to create profile')
  }
}

export const handleLandmarkCreate = async (data: FieldValues) => {
  try {
    const user = await currentUser()
    if (!user) {
      throw new Error('Please sign in')
    }
    
    return
  } catch {
    throw new Error('Failed to create landmark')
  }
}