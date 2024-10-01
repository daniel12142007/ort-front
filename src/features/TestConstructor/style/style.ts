import styled from "@emotion/styled";
import { Button, Container } from "@mui/material";

export const TitleHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;

  h1 {
    font-size: 36px;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: white;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;

  h1 {
    font-size: 32px;
    font-weight: 600;
    color: #000000;
    margin: 10px 0;
  }
`;
export const CreateButton = styled(Button)`
  background-color: #f0f0f0;
  box-shadow: 4px 4px 10px -3px rgba(0, 0, 0, 0.3);
  padding: 15px 25px;
  border-radius: 5px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: #000000;
  cursor: pointer;
  text-transform: none;

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    background-color: #f0f0f0;
  }

  &:disabled {
    opacity: 0.5;
    color: #000000;
  }
`;
export const AddButton = styled(Button)`
  background-color: #3e5ecf;
  box-shadow: "4px 4px 10px -3px rgba(0, 0, 0, 0.3)";
  padding: 10px;
  width: 20cqw;
  border-radius: 5px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  text-transform: none;

  &:hover {
    background-color: #299bd3;
  }

  &:active {
    background-color: #299bd3;
  }

  &:disabled {
    opacity: 0.5;
    color: #000000;
  }
`;

export const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;
export const Grid = styled.div`
  width: auto;
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  gap: 20px;
`

export const ItemBox = styled.div`
  width: 100%;
  padding: 13px 13px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  background-color: #ffffff;
  justify-content: space-between;
  &:hover {
    background-color: #f5f5f5;
  }
`;
export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
`;
export const BoxQuestion = styled.div`
  display: flex;
  width: 35%;
  justify-content: space-between;
  align-items: center;
  color: #949494;
`;
export const Question = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const ContainerStyle = styled(Container)`
  background-color: white;
  overflow: auto;
  max-height: 600px;
  margin: 0;
  max-width: 100% !important;
  position: relative;
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;

  & > form:not(:last-child) {
    border-bottom: 2px dashed blue;
  }
`;
export const TestBlockUI = styled.form`
  padding: 30px 0;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 10px;
`;
export const TestQuestion = styled.div`
  display: flex;
  gap: 20px;

  & > div {
    display: flex;
    gap: 10px;
    & > div {
      padding: 5px;
      background-color: #f0f0f0;
      display: flex;
      gap: 10px;
      border: 1px solid gray;
      overflow: hidden;
    }
  }
`;

export const TestOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 30px 30px 0 30px;
`;

export const TestOptionBlock = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
`;
export const CheckOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InputFile = styled.button`
  border: 2px solid gray;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
`;
export const InputFileOption = styled.button`
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  cursor: pointer;
`;
export const ImageBlock = styled.div<{ size?: number }>`
  width: ${({ size }) => (size ? `${size}px` : "80px")};
  height: ${({ size }) => (size ? `${size}px` : "80px")};
  overflow: hidden;
  position: relative;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const DeleteImage = styled.div<{ top?: number; right?: number }>`
  transform: rotate(45deg);
  position: absolute;
  top: ${({ top }) => (top ? `${top}px` : "0")};
  right: ${({ right }) => (right ? `${right}px` : "0")};
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const InputText = styled.textarea`
  resize: none;
  width: 300px;
  height: 80px;
  border: none;
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 10px;

  &::placeholder {
    color: gray;
    fontfamily: Italic;
  }
`;

export const TestListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  max-height: 67vh;
`;

export const NotQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  h1 {
    font-size: 48px;
  }
  p {
    font-size: 20px;
    padding: 10px 200px;
    line-height: 1.5em;
    height: 3em;
    word-break: break-word;
    text-align: center;
  }
`;
