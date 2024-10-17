export interface PersonState {
  age: number
  email: string
  image: string
  name: string
  phoneNumber: string
  schoolName: string
  surname: string
  userId: number
}

export interface UpdatePersonState {
  image: File | undefined | string
  name: string
  age: number
  schoolId: number
  phoneNumber: string
}

export interface UpdatePersonStateImage {
  image: string
  name: string
  age: number
  schoolId: number
  phoneNumber: string
}

export interface ArchiveState {
  subjectName: string
  testId: number
}
