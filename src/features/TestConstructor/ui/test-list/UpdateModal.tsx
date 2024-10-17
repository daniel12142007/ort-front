import React, { useState } from "react";
import { Modal, Checkbox } from "@mui/material";
import { QuestionReq, QuestionUpdateState } from "../../type";
import {Box,Buttonn,DeleteImage,Flexing,TextFieldd,Ending,} from "../../style/style";
import { useStore } from "../../model/store";
import { AddPhotoAlternate } from "@mui/icons-material";

interface UpdateModalProps {
  questionData: QuestionReq;
  onClose: () => void;
  refreshQuestions: () => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({
  questionData,
  onClose,
  refreshQuestions,
}) => {
  const [testData, setTestData] = useState<QuestionUpdateState>({
    questionUpdateRequest: {
      questionId: questionData.questionId,
      image: questionData.image,
      description: questionData.description,
    },
    optionUpdateRequests: questionData.optionsResponse.map((option) => ({
      optionId: option.id,
      image: option.image,
      description: option.description,
      isCorrect: option.correct,
    })),
  });

  const { updateTest } = useStore();
  const [uploadedOptionImages, setUploadedOptionImages] = useState<(File | null)[]>(Array(4).fill(null));

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestData({
      ...testData,
      questionUpdateRequest: {
        ...testData.questionUpdateRequest,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleOptionChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedOptions = [...testData.optionUpdateRequests];
    updatedOptions[index] = {
      ...updatedOptions[index],
      description: e.target.value,
    };
    setTestData({ ...testData, optionUpdateRequests: updatedOptions });
  };

  const handleCorrectOptionChange = (index: number) => {
    const updatedOptions = testData.optionUpdateRequests.map((option, i) => ({
      ...option,
      isCorrect: i === index,
    }));
    setTestData({ ...testData, optionUpdateRequests: updatedOptions });
  };

  const handleQuestionImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTestData((prevData) => ({
          ...prevData,
          questionUpdateRequest: {
            ...prevData.questionUpdateRequest,
            image: reader.result as string,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOptionImageUpload = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newUploadedImages = [...uploadedOptionImages];
      newUploadedImages[index] = file;

      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedOptions = [...testData.optionUpdateRequests];
        updatedOptions[index] = {
          ...updatedOptions[index],
          image: reader.result as string,
        };
        setTestData({ ...testData, optionUpdateRequests: updatedOptions });
      };
      reader.readAsDataURL(file);

      setUploadedOptionImages(newUploadedImages);
    }
  };

  const handleRemoveImage = (index: number) => {
    const newUploadedImages = [...uploadedOptionImages];
    newUploadedImages[index] = null;
    setUploadedOptionImages(newUploadedImages);

    const updatedOptions = [...testData.optionUpdateRequests];
    updatedOptions[index] = {
      ...updatedOptions[index],
      image: "",
    };
    setTestData({ ...testData, optionUpdateRequests: updatedOptions });
  };

  const onSave = async () => {
    try {
      await updateTest(testData);
      onClose();
      refreshQuestions();
    } catch (error) {
      console.error("Failed to update the question:", error);
    }
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box>
        <Flexing>
          <label style={{ cursor: "pointer", display: "flex", alignItems: "center", position: "relative" }}>
            <input type="file" accept="image/*" onChange={handleQuestionImageUpload} style={{ display: "none" }} />
            {testData.questionUpdateRequest.image ? (
              <div style={{ position: "relative" }}>
                <img src={testData.questionUpdateRequest.image} width="100px" height="100px" />
                <DeleteImage onClick={() => setTestData((prevData) => ({
                  ...prevData,
                  questionUpdateRequest: { ...prevData.questionUpdateRequest, image: "" },
                }))}>
                  +
                </DeleteImage>
              </div>
            ) : (
              <AddPhotoAlternate />
            )}
          </label>

          <TextFieldd
            label="Вопрос"
            name="description"
            value={testData.questionUpdateRequest.description}
            onChange={handleQuestionChange}
            sx={{ mb: 2 }}
          />
        </Flexing>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
          {testData.optionUpdateRequests.map((option, index) => (
            <Flexing key={index}>
              <Checkbox
                checked={option.isCorrect}
                onChange={() => handleCorrectOptionChange(index)}
              />

              <label style={{ cursor: "pointer", display: "flex", alignItems: "center", position: "relative" }}>
                <input type="file" accept="image/*" onChange={handleOptionImageUpload(index)} style={{ display: "none" }} />
                {option.image ? (
                  <div style={{ position: "relative" }}>
                    <img src={option.image} width="100px" height="100px" />
                    <DeleteImage onClick={() => handleRemoveImage(index)}>
                      +
                    </DeleteImage>
                  </div>
                ) : (
                  <AddPhotoAlternate />
                )}
              </label>

              <TextFieldd
                label={`Описание варианта ${index + 1}`}
                value={option.description}
                onChange={(e) => handleOptionChange(index, e)}
              />
            </Flexing>
          ))}
        </div>

        <Ending>
          <Buttonn onClick={onSave}>Сохранить</Buttonn>
        </Ending>
      </Box>
    </Modal>
  );
};
export default UpdateModal;