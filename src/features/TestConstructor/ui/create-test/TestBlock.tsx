import React from "react";
import { TestBlockUI, TestQuestion, TestOptions, ImageBlock, InputText, DeleteImage } from "../../style/style";
import OptionBlock from "./OptionBlock";
import { TestFileState } from "../../type";
import { UploadUI } from "@/shared/ui";
import { AddIcon } from "@/shared/ui/icon";
import { InputProps, OptionsInputState } from "../../type";

interface Props {
  data: TestFileState;
  update: (e: TestFileState) => void;
  subject: number;
  valid: (e: boolean) => void;
}

const TestBlock: React.FC<Props> = ({ data, update, subject, valid }) => {
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
    valid(data.questionImageRequest.description.length > 0 && data.optionImageRequests.every((x) => x.description.length > 0));
    update({
      ...data,
      questionImageRequest: { image: files.main_image, description: data.questionImageRequest.description, subjectId: subject },
      optionImageRequests: [
        { description: optionsInput.b, image: files.b_image!, isCorrect: correct == "b" ? true : false },
        { description: optionsInput.a, image: files.a_image!, isCorrect: correct == "a" ? true : false },
        { description: optionsInput.c, image: files.c_image!, isCorrect: correct == "c" ? true : false },
        { description: optionsInput.d, image: files.d_image!, isCorrect: correct == "d" ? true : false },
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
        <span>{data.id}.</span>

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
          <div style={{ display: "flex", flexDirection: "column", padding: 0 }}>
            <button>x</button>
            <button>y</button>
            <button>z</button>
          </div>
          <InputText
            style={{ width: "800px" }}
            placeholder="Вопрос"
            value={data.questionImageRequest.description}
            onChange={(e) =>
              onSave({ ...data, questionImageRequest: { ...data.questionImageRequest, description: e.target.value } })
            }
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
