import React, { useEffect, useRef } from "react";
import { Modal, ModalContent, Flexing, Line, Span, DeleteBtn } from "../../shared/ui/modalSideBar/style";

interface ModalDeleteProps {
  title: string; 
  onConfirm: () => void;
  onClose: () => void; 
}

export const DeleteModal: React.FC<ModalDeleteProps> = ({ title, onConfirm, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Modal>
      <ModalContent ref={modalRef}>
        <Line>
          <span>Вы действительно хотите удалить</span>
          <Span>{title}?</Span>
        </Line>
        <Flexing>
          <DeleteBtn onClick={onConfirm}>Удалить</DeleteBtn>
          <button onClick={onClose}>Отмена</button>
        </Flexing>
      </ModalContent>
    </Modal>
  );
};
