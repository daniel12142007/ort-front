import { ModalContainer2, ModalContent, ModalButtons, ModalButton, Span, ModalButton2, Text } from "../../style";
import { useSchoolsStore } from "../../model/store";
import { SchoolRes } from "../../type";

interface DeleteModalProps {
  school: SchoolRes | null;
  onClose: () => void;
}

export const DeleteModal = ({ school, onClose }: DeleteModalProps) => {
  const { deleteSchool } = useSchoolsStore();

  const handleContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleDelete = async () => {
    if (school) {
      await deleteSchool(school.id);
      onClose();
    }
  };

  return (
    <ModalContainer2 onClick={handleContainerClick}>
      <ModalContent onClick={handleContentClick}>
        <Text>Вы уверены, что хотите удалить школу <Span>{school?.name}?</Span></Text>
        <ModalButtons>
          <ModalButton onClick={handleDelete}>Удалить</ModalButton>
          <ModalButton2 onClick={onClose}>Отмена</ModalButton2>
        </ModalButtons>
      </ModalContent>
    </ModalContainer2>
  );
};
