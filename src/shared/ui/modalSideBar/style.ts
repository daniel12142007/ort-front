import styled from "@emotion/styled";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 500px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  button {
    width: 200px;
    padding: 10px 20px;
    margin: 20px;
    border: none;
    border-radius: 5px;
    background: #407BFF;
    color: white;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    font-family: Montserrat;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
export const Line = styled.div`
    padding: 30px;
    border-bottom: 1px solid gray;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Liner = styled.div`
    font-size: 22px;
    font-weight: 500;
    font-family: Montserrat;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
`
export const Flexing = styled.div`
    display: flex;
    gap: 20px;
`
export const Span = styled.span`
    color: red;
`
export const Logo = styled.div`
    display: flex;
    justify-content: center;
    color: black;
    margin-top: 20px;
`
export const DeleteBtn = styled.div`
    width: 200px;
    padding: 10px 20px;
    margin: 20px;
    border: none;
    border-radius: 5px;
    background: red;
    color: white;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    font-family: Montserrat;
    text-align: center;

    &:hover {
      background-color: #CC0001;
    }
`