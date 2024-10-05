import React, { useEffect, useRef } from "react";
import { Modal, ModalContent, Flexing, Line, Span, Logo, Liner, DeleteBtn } from "./style";
import logo from "../../../shared/assets/svg/logos.svg";

interface ModalDeleteProps {
  onConfirm: () => void;
  onClose: () => void;
}

export const ModalDelete: React.FC<ModalDeleteProps> = ({ onConfirm, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Закрытие модального окна при клике вне его
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
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Line>
            <Liner>
                <span>Вы действительно хотите </span>
                <Span>удалить</Span>
            </Liner>
            <span>этот вопрос?</span>
        </Line>
        <Flexing>
          <DeleteBtn onClick={onConfirm}>Удалить</DeleteBtn>
          <button onClick={onClose}>Отмена</button>
        </Flexing>
      </ModalContent>
    </Modal>
  );
};
