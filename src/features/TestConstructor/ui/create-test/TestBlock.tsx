import React from "react";
import { TestBlockUI, TestQuestion, TestOptions, ImageBlock, InputText, DeleteImage } from "../../style/style";
import OptionBlock from "./OptionBlock";
import { TestFileState } from "../../type";
import { UploadUI } from "@/shared/ui";
import { AddIcon } from "@/shared/ui/icon";
import { InputProps, OptionsInputState } from "../../type";

interface Props {
  index: number;
  data: TestFileState;
  update: (e: TestFileState) => void;
  subject: number;
  valid: (e: boolean) => void;
}

const TestBlock: React.FC<Props> = ({ index, data, update, subject, valid }) => {
  const [correct, setCorrect] = React.useState<string>("a");

  const [files, setFiles] = React.useState<InputProps>({
    main_image: null,
    a_image: null,
    b_image: null,
    c_image: null,
    d_image: null,
  });
  const [optionsInput, setOptionsInput] = React.useState<OptionsInputState>({
    a: "",
    b: "",
    c: "",
    d: "",
  });

  const handleFileChange = (key: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [key]: file }));
  };

  const onSave = (data: TestFileState) => {
    valid(data.questionRequest.description.length > 0 && data.optionRequests.every((x) => x.description.length > 0));
    update({
      ...data,
      questionRequest: { imageQuestion: files.main_image, description: data.questionRequest.description, subjectId: subject },
      optionRequests: [
        { description: optionsInput.b, imageOption: files.b_image!, isCorrect: correct == "b" ? true : false },
        { description: optionsInput.a, imageOption: files.a_image!, isCorrect: correct == "a" ? true : false },
        { description: optionsInput.c, imageOption: files.c_image!, isCorrect: correct == "c" ? true : false },
        { description: optionsInput.d, imageOption: files.d_image!, isCorrect: correct == "d" ? true : false },
      ],
    });
  };

  const changeOption = (key: string, value: string) => {
    setOptionsInput((prev) => ({ ...prev, [key]: value }));
  };

  React.useEffect(() => {
    onSave(data);
  }, [files, correct, optionsInput]);

  const getUrl = (file: File | null) => {
    return file ? URL.createObjectURL(file) : "";
  };

  return (
    <TestBlockUI>
      <TestQuestion>
        <span>{index}.</span>

        <div>
          {files.main_image ? (
            <>
              <ImageBlock size={80}>
                <img src={getUrl(files.main_image)} alt="file" />
                <DeleteImage top={1} right={1} onClick={() => handleFileChange("main_image", null)}>
                  <AddIcon color="white" />
                </DeleteImage>
              </ImageBlock>
            </>
          ) : (
            <UploadUI setFile={(e) => handleFileChange("main_image", e)} />
          )}
          <InputText
            style={{ width: "800px" }}
            placeholder="Вопрос"
            value={data.questionRequest.description}
            onChange={(e) => onSave({ ...data, questionRequest: { ...data.questionRequest, description: e.target.value } })}
          />
        </div>
      </TestQuestion>
      <TestOptions>
        <OptionBlock
          option="a"
          image={getUrl(files.a_image)}
          setFile={(file) => handleFileChange("a_image", file)}
          correct={correct}
          setCorrect={setCorrect}
          value={optionsInput.a}
          setValue={(e) => changeOption("a", e)}
        />
        <OptionBlock
          option="b"
          image={getUrl(files.b_image)}
          setFile={(file) => handleFileChange("b_image", file)}
          correct={correct}
          setCorrect={setCorrect}
          value={optionsInput.b}
          setValue={(e) => changeOption("b", e)}
        />
        <OptionBlock
          option="c"
          image={getUrl(files.c_image)}
          setFile={(file) => handleFileChange("c_image", file)}
          correct={correct}
          setCorrect={setCorrect}
          value={optionsInput.c}
          setValue={(e) => changeOption("c", e)}
        />
        <OptionBlock
          option="d"
          image={getUrl(files.d_image)}
          setFile={(file) => handleFileChange("d_image", file)}
          correct={correct}
          setCorrect={setCorrect}
          value={optionsInput.d}
          setValue={(e) => changeOption("d", e)}
        />
      </TestOptions>
    </TestBlockUI>
  );
};

export default TestBlock;
