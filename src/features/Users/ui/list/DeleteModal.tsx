import { ModalContainer2, ModalContent, ModalButtons, ModalButton, ModalButton2, Text, Span, } from "../../../Schools/style";

interface DeleteUserModalProps {
  userName: string;
  onConfirm: () => void;
  onClose: () => void;
}

export const DeleteUserModal = ({ userName, onConfirm, onClose }: DeleteUserModalProps) => {
  
  const handleContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
  };

  return (
    <ModalContainer2 onClick={handleContainerClick}>
      <ModalContent onClick={handleContentClick}>
        <Text>Вы уверены, что хотите удалить пользователя <Span>{userName}?</Span></Text>
        <ModalButtons>
          <ModalButton onClick={onConfirm}>Удалить</ModalButton>
          <ModalButton2 onClick={onClose}>Отмена</ModalButton2>
        </ModalButtons>
      </ModalContent>
    </ModalContainer2>
  );
};
