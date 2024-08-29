import type { UUID } from "~/app/shared/types/Id"

export interface IUser {
  id: UUID
  username: string
  fullName: string
  profileAvatar?: string
  email: string
  bio?: string
  location?: string
  position?: string
  company?: string
  country?: string
  githubLink?: string
  website?: string
  createdAt: Date
  updatedAt?: Date
}