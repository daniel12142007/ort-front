export interface TestFileState {
  id: number;
  questionRequest: QuestionRequestFileState;
  optionRequests: OptionFileState[];
}
interface QuestionRequestFileState {
  subjectId: number;
  description: string;
  imageQuestion?: File | null;
}
interface OptionFileState {
  description: string;
  imageOption?: File;
  isCorrect: boolean;
}

export interface TestState {
  questionRequest: QuestionRequestState;
  optionRequests: OptionState[];
}
interface QuestionRequestState {
  subjectId: number;
  description: string;
}
interface OptionState {
  description: string;
  isCorrect: boolean;
}

export interface QuestionReq {
  questionId: number;
  subjectId: number;
  description: string;
  image: string;
  optionsResponse: OptionReq[];
}

export interface OptionReq {
  id: number;
  questionId: number;
  correct: boolean;
  description: string;
  image: string;
}

export type InputProps = {
  main_image: File | null;
  a_image: File | null;
  b_image: File | null;
  c_image: File | null;
  d_image: File | null;
};
export type OptionsInputState = {
  a: string;
  b: string;
  c: string;
  d: string;
};

export interface GetQuestionsListResponse {
  status: string;
  message: string;
}
