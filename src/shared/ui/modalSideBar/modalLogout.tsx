import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TokenService from "@/utils";
import { Flexing, Line, Logo, Modal, ModalContent, Span } from "./style";
import logo from "../../../shared/assets/svg/logos.svg"

export const ModalLogout = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  const confirmLogout = () => {
    TokenService.removeToken();
    navigate("/");
    onClose();
  };

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
            <span>Вы уверены, что хотите </span>
            <Span> выйти</Span>
        </Line>
        <Flexing>
            <button onClick={confirmLogout}>Подтвердить</button>
            <button onClick={onClose}>Отмена</button>
        </Flexing>
      </ModalContent>
    </Modal>
  );
};
