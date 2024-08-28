import React from "react";
import { TestOptionBlock, CheckOption, ImageBlock, InputText, DeleteImage } from "../../style/style";
import { Checkbox } from "@mui/material";
import { UploadUI } from "@/shared/ui";
import { AddIcon } from "@/shared/ui/icon";

interface Props {
  option: string;
  image?: string;
  setFile: (file: File | null) => void;
  value?: string;
  setValue: (e: string) => void;
  correct: string;
  setCorrect: (correct: string) => void;
}

const OptionBlock: React.FC<Props> = ({ setFile, option, correct, setCorrect, image, value, setValue }) => {
  const checkboxRef = React.useRef<HTMLInputElement>(null);

  return (
    <TestOptionBlock onClick={() => checkboxRef.current?.click()}>
      <CheckOption>
        <Checkbox checked={correct === option} onChange={() => setCorrect(option)} />
        <span>{option}.</span>
      </CheckOption>
      <div>
        {image ? (
          <>
            <ImageBlock size={80}>
              <img src={image} alt={`image-${option}`} />
              <DeleteImage top={5} right={5} onClick={() => setFile(null)}>
                <AddIcon color="white" />
              </DeleteImage>
            </ImageBlock>
          </>
        ) : (
          <UploadUI setFile={setFile} />
        )}
      </div>
      <div>
        <InputText placeholder={`Вариант ответа ${option}`} value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </TestOptionBlock>
  );
};

export default OptionBlock;
