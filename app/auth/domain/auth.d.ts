import type { UUID } from "~/app/shared/types/Id"

export interface ISignInPayload {
  email: string
  password: string
}

export interface ISignInResponse {
  id: UUID
  username: string
  fullName: string
  email: string
  bio?: string
  location?: string
  company?: string
  country?: string
  githubLink?: string
  website?: string
  createdAt: Date
  updatedAt?: Date
}