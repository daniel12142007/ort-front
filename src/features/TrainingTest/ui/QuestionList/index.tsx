import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container";
import { useTrainingTestStore } from "../../model/store";
import AiSVG from "../../../../shared/assets/svg/ai.svg";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { ChatUI } from "@/features/Ai";

export const QuestionComponent = () => {
  const location = useLocation();
  const { id: subjectId, totalCount } = location.state;
  const { questions, loading, getQuestions, count, questionsLoaded } = useTrainingTestStore();
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 15;
  const maxPage = Math.ceil(totalCount / questionsPerPage);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiHelpData, setAiHelpData] = useState<any>(null);

  const handleOptionSelect = (questionId: number, selectedOptionId: number, correct: boolean) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: selectedOptionId
    }));
    if (!correct) {
      navigator.vibrate(200);
    }
  };

  const handleOpenModal = (questionIndex: number) => {
    const currentQuestion = questions[questionIndex];

    if (currentQuestion) {
      const selectedOption = selectedAnswers[currentQuestion.questionId];
      const correctOption = currentQuestion.optionsResponse.find(option => option.correct);

      const aiHelpData = {
        question: currentQuestion.description,
        selectedAnswer: selectedOption ? currentQuestion.optionsResponse.find(option => option.id === selectedOption)?.description : null,
        correctAnswer: correctOption?.description,
        isCorrect: correctOption?.id === selectedOption
      };

      setAiHelpData(aiHelpData);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (subjectId) {
      getQuestions(Number(subjectId), currentPage);
    }
  }, [subjectId, currentPage]);

  const variants = ["А", "Б", "В", "Г"];
  const totalPages = Math.ceil(count / questionsPerPage);

  if (loading) {
    return <Container>Загрузка вопросов...</Container>;
  }

  if (!loading && !questionsLoaded) {
    return <Container>Нет вопросов для данного предмета</Container>;
  }

  return (
    <Container>
      <div className="flex flex-col mt-5 bg-white rounded-lg">
        {questions.map((question, index) => (
          <motion.div
            key={question.questionId}
            className="py-4 px-2 border-b border-[#D9D9D9]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          >
            <div className="flex">
              <p className="p-2">{index + 1 + (currentPage - 1) * questionsPerPage}.</p>
              <div className="flex gap-3 w-[95.5%]">
                {question.image && (
                  <img src={question.image} alt="Question" className="w-[100px] h-[100px] object-cover" />
                )}
                <p className="text-[20px] font-montserrat font-normal p-2 rounded-md bg-[#F7F7F7] w-full">
                  {question.description}
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 px-7">
              {question.optionsResponse.map((item, optionIndex) => {
                const selectedOption = selectedAnswers[question.questionId];
                const isCorrect = item.correct;
                const isSelected = selectedOption === item.id;

                return (
                  <motion.div
                    key={item.id}
                    className="flex items-center mb-2 transition-all duration-300"
                    whileTap={{ scale: 0.95 }}
                  >
                    <label htmlFor={`option-${index}-${optionIndex}`} className="flex items-center cursor-pointer gap-2 w-full">
                      <input
                        type="radio"
                        id={`option-${index}-${optionIndex}`}
                        name={`question-${index}`}
                        onChange={() => handleOptionSelect(question.questionId, item.id, isCorrect)}
                        disabled={!!selectedOption}
                        className="hidden"
                      />
                      <span className="flex items-center justify-center w-6 h-6 border rounded-full">
                        {isSelected && (
                          isCorrect ? (
                            <FaCheckCircle className="text-green-500" />
                          ) : (
                            <FaTimesCircle className="text-red-500" />
                          )
                        )}
                      </span>
                      {item.image && (
                        <img src={item.image} alt="Option" className="w-[80px] h-[80px] object-cover" />
                      )}
                      <p className="p-2">{variants[optionIndex]}.</p>
                      <p
                        className={`p-2 w-[100%] rounded-md text-[16px] font-montserrat font-normal bg-[#F7F7F7] transition-all ${isSelected && !isCorrect
                          ? "border border-red-500"
                          : isSelected && isCorrect
                            ? "border border-green-500"
                            : ""
                          }`}
                      >
                        {item.description}
                      </p>
                    </label>
                  </motion.div>
                );
              })}
            </div>
            {selectedAnswers[question.questionId] && (
              <motion.div
                className="mt-4 text-sm px-7 flex items-center gap-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {question.optionsResponse.some(option => option.correct && option.id === selectedAnswers[question.questionId]) ? (
                  <p className="text-green-600">Правильный ответ!</p>
                ) : (
                  <p className="text-red-600">
                    Неправильный ответ. Правильный ответ будет: {variants[question.optionsResponse.findIndex(option => option.correct)]}.
                  </p>
                )}
              </motion.div>
            )}
            <div className="flex justify-end px-7">
              <div className="flex gap-3 justify-center p-1 items-center text-[#3E5ECF] w-[150px] md:w-[240px] border border-[#3E5ECF] rounded-md text-[16px] md:text-[20px] font-roboto font-medium mt-2">
                <button onClick={() => handleOpenModal(index)}>Помощь от AI</button>
                <img src={AiSVG} alt="AiSVG" className="w-[25px] h-[25px]" />
              </div>
            </div>
          </motion.div>
        ))}
        <div className="flex justify-around mt-4">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
            <NavigateBefore sx={{ color: currentPage === 1 ? "gray" : "blue" }} />
          </button>
          <div>
            {Array.from({ length: totalPages }, (_, i) => (
              <span
                key={i}
                className={`mx-1 cursor-pointer ${currentPage === i + 1 ? 'border-b-2 border-[#3E5ECF]' : ""} `}
              >
                {i + 1}
              </span>
            ))}
          </div>
          <button disabled={currentPage === maxPage} onClick={() => setCurrentPage(currentPage + 1)}>
            <NavigateNext sx={{ color: currentPage === maxPage ? "gray" : "blue" }} />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
          <ChatUI aiHelpData={aiHelpData} handleClose={handleCloseModal} />
        </div>
      )}
    </Container>
  );
};
