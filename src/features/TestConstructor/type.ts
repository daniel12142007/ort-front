export interface TestState {
  id: number;
  question: string;
  imageQuestion?: File;
  options: OptionState[];
}

interface OptionState {
  option: string;
  imageOption?: File;
  isTrue: boolean;
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

export interface SubjectReq {
  id: number;
  subjectName: string;
}