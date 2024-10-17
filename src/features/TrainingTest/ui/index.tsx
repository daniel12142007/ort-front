import mathematicIcon from "@/shared/assets/icon/mathematic.svg"
import React from "react"
import { useTrialTestStore } from "@/features/trial-testing/models/store"
import { useNavigate } from "react-router-dom"
import { useTrainingTestStore } from "../model/store"
import { Container } from "@/shared/ui/Container"

export const TrainingTest = () => {
  const [active, setActive] = React.useState<{
    id: number;
    subjectName: string;
  }>();

  const { subjects, fetchSubjects } = useTrialTestStore();
  const { getQuestions } = useTrainingTestStore();
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchSubjects();
  }, []);

  const handleSubjectSelect = async (subject: { id: number; subjectName: string , questionCount: number}) => {
    await getQuestions(subject.id, 10); 
    navigate(`/main/training-test/${subject.subjectName}`, { state: { id: subject.id, totalCount: subject.questionCount } }); 
  };

  const subjectsWithQuestions = subjects.filter(subject => subject.questionCount > 0);
  const subjectsWithoutQuestions = subjects.filter(subject => subject.questionCount === 0);
  const text = subjects.length === 0 ? "" : "Эти предметы пока не доступны";


  const subjectListWithQuestions = subjectsWithQuestions.map((subject, i) => (
    <ItemButton
      key={i}
      title={subject.subjectName}
      icon={mathematicIcon}
      iconColor="#9cc5e4"
      active={active?.id === subject.id}
      onClick={() => {
        setActive(subject === active ? undefined : subject);
        handleSubjectSelect(subject);
      }}
      disabled={subject.questionCount === 0}
    />
  ));


  const subjectListWithoutQuestions = subjectsWithoutQuestions.map((subject, i) => (
    <ItemButton
      key={i}
      title={subject.subjectName}
      icon={mathematicIcon}
      iconColor="#9cc5e4"
      active={active?.id === subject.id}
      onClick={() => {
        setActive(subject === active ? undefined : subject);
        handleSubjectSelect(subject);
      }}
      disabled={subject.questionCount === 0}
    />
  ));

  return (
    <Container>
      <div className="flex mt-5 flex-col gap-4 items-center">
        <div className="flex flex-wrap gap-2 md:gap-5 w-full lg:gap-4">
          {subjectListWithQuestions}
        </div>
        
        <p className="text-red-600">{text}</p>
        <div className="flex flex-wrap gap-2 md:gap-5 w-full lg:gap-4 mt-6">
          {subjectListWithoutQuestions}
        </div>
      </div>
    </Container>
  );
};

const ItemButton: React.FC<{
  title: string;
  icon: string;
  iconColor: string;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}> = ({ title, icon, iconColor, active, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`flex flex-col md:flex-row w-[48.5%] lg:w-[32.4%] items-center bg-white shadow-lg rounded-lg 
      overflow-hidden cursor-pointer md:gap-4 disabled:opacity-50 
      ${ active ? "transform scale-105 shadow-[0_0_15px_0px_#407bff]" : ""}`}
      onClick={onClick} 
    >
      <div className={`bg-[${iconColor}] flex justify-center items-center bg-[#9AB6FF] w-full md:w-[30%] h-20`}>
        <img src={icon} alt="itemIcon" className="w-full h-full flex items-center m-2 justify-center" />
      </div>
      <div>
        <p className="font-semibold text-gray-800 text-[16px] m-3 md:m-0 md:text-[20px]">{title}</p>
      </div>
    </button>
  );
};