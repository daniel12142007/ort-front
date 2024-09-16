import { api } from "../api";
import { TestFileState, TestFileTextState, TestState } from "../type";

export const uploadImageAndGetUrl = async (question: TestFileState): Promise<TestFileTextState> => {
  try {
    // Обработка изображения вопроса
    const questionImageUrl = question.questionImageRequest.image
      ? await imageService(question.questionImageRequest.image)
      : undefined;

    // Обработка изображений вариантов ответа
    const optionImageUrls = await Promise.all(
      question.optionImageRequests.map(async (option) => {
        if (option.image) {
          return await imageService(option.image);
        }
        return undefined; // Если изображения нет, возвращаем undefined
      })
    );

    // Создаем новый объект с URL-ами изображений
    const newQuestion: TestFileTextState = {
      questionImageRequest: {
        ...question.questionImageRequest,
        image: questionImageUrl,
      },
      optionImageRequests: question.optionImageRequests.map((option, index) => ({
        ...option,
        image: optionImageUrls[index], // Заменяем изображение на URL
      })),
    };
    return newQuestion; // Возвращаем обновленный объект с URL-ами изображений
  } catch (err) {
    console.log(err);
    throw new Error("Ошибка загрузки изображений"); // Обработка ошибок
  }
};

// Функция для загрузки изображения и получения URL
const imageService = async (image: File): Promise<string> => {
  try {
    const res = await api.upload(image); // Предполагается, что api.upload возвращает URL изображения
    if (res) {
      return res.data; // Возвращаем URL изображения
    }
    throw new Error("Не удалось получить URL изображения"); // Обработка ошибки, если URL не получен
  } catch (err) {
    console.log(err);
    throw new Error("Ошибка загрузки изображения"); // Обработка ошибок
  }
};

export const notImage = (question: TestFileState) => {
  const notImageQuestion: TestState = {
    questionRequest: {
      description: question.questionImageRequest.description,
      subjectId: question.questionImageRequest.subjectId,
    },
    optionRequests: question.optionImageRequests.map((x) => ({
      description: x.description,
      isCorrect: x.isCorrect,
    })),
  };
  return notImageQuestion;
};
