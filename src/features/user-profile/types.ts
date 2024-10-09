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
  name: string
  surname: string
  email: string
  image: string
  age: number
}

export interface ArchiveState {
  subjectName: string
  testId: number
}
