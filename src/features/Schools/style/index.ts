import styled from "@emotion/styled"

export const MainBlock = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
`
export const Flexing = styled("div")`
    display: flex;
    justify-content: space-between;
`
export const AddBtn = styled("button")`
    width: 167px;
    height: 45px;
    background: #7FC7FF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`
export const Dashboard = styled("div")`
    width: 100%;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const NamesBlock = styled("div")`
    display: flex;
    justify-content: space-between;
    width; 100%;
    background: #B0C4DE1C;
    border-radius: 8px;
    padding: 10px 20px;
`
export const ActiveBlock = styled("div")`
    display: flex;
    justify-content: space-between;
    width; 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #F2F2F2;
`
export const Update = styled("div")`
    display: flex;
    justify-content: end;
    width: 33%;
    gap: 10px;
    padding-right: 10px;
`
export const School = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: scroll;
    max-height: calc(100vh - 400px);

    scrollbar-width: thin; /* тонкий скроллбар для Firefox */
    scrollbar-color: #c4c4c4 transparent; /* цвет для Firefox */

    &::-webkit-scrollbar {
        width: 6px; /* ширина скроллбара для Chrome, Safari и др. */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #c4c4c4; /* цвет для ползунка скроллбара */
        border-radius: 4px; /* скругленные углы */
    }

    &::-webkit-scrollbar-track {
        background: transparent; /* прозрачный фон для трека скроллбара */
    }
`
export const Name = styled("div")`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    width: 33%;
    padding-left: 10px;
    height: auto;
`
export const Area = styled("div")`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    justify-content: center;
    width: 33%;
`
// Стили для модального окна
export const ModalContainer = styled.div`
    position: fixed; /* Зафиксировано на экране */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Центрирование по экрану */
    width: 525px;
    height: 433px;
    background-color: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1001; /* Поверх всего контента */
`;
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5); /* Затемнённый фон */
    z-index: 1000; /* Позади модального окна */
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const BackIcon = styled.div`
    cursor: pointer;
    // font-size: 20px;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 500;
    font-family: Montserrat;
`;
export const Label = styled.p`
    font-size: 16px;
    font-weight: 400;
    font-family: Montserrat;
`

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    width: 100%;
    outline: none;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const AddButton = styled.button<{ primary?: boolean }>`
    width: 48%;
    padding: 10px 0;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: ${(props) => (props.primary ? "#fff" : "#000")};
    transition: background-color 0.3s ease;
    background: #7FC7FF;

    &:hover {
        background-color: #a1d4ff;
    }
`;
export const Button = styled.button<{ primary?: boolean }>`
    width:48%;
    padding: 10px 0;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background: #FF621E;
    color: ${(props) => (props.primary ? "#fff" : "#000")};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ff8a53";
    }
`;


export const ModalContainer2 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  text-align: center;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const ModalButton = styled.button`
  font-size: 16px;
  background-color: #d32f2f;
  color: white;
  padding: 7px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c62828;
  }
`;
export const ModalButton2 = styled.button`
  font-size: 16px;
  background: #FF621E;
  color: white;
  padding: 7px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff8a53;
  }
`;
export const Span = styled.span`
    color: #7FC7FF;
`
export const Text = styled.div`
    font-size: 20px;
    font-weight: 400;
    font-family: Montserrat;
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 5px;
`