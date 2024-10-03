export interface SubjectReq {
  id: number
  subjectName: string
  questionCount: number
  main: boolean
}

export interface QuestionState {
  questionId: number
  image: string
  description: string
  subjectId: number
  optionsResponse: OptionState[]
  testId: number
}

export interface OptionState {
  id: number
  image: string
  description: string
  questionId: number
  correct: boolean
  chose: boolean
}

export interface AnswerState {
  questionId: number
  optionId: number
  testId: number
}

export interface TestResultState {
  testId: number
  percent: number
  correct: number
  notCorrect: number
  sumQuestion: number
}
