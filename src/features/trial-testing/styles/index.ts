import styled from "@emotion/styled"

export const ItemButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  padding: 50px;
  & > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    align-items: center;
  }
`

export const ItemButtonStyle = styled.button<{
  iconColor: string
  active: boolean
}>`
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.03s;

  box-shadow: ${({ active }) =>
    active
      ? "inset 0px 2px 4px rgba(0, 0, 0, 0.2)"
      : " 0px 4px 8px rgba(0, 0, 0, 0.2)"};
  transform: ${({ active }) => active && "translateY(1px)"};

  &:active {
    opacity: 0.9;
    transform: translateY(1px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:nth-of-type(1) {
    overflow: hidden;
    background-color: ${({ iconColor }) => iconColor};
  }

  & > div:nth-of-type(2) {
    padding: 10px 40px;
    p {
      font-weight: 500;
      font-size: 20px;
      color: #000000;
    }
  }
`
export const TestButton = styled.button`
  width: 40%;
  margin: 0 auto;
  background-color: #407bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    background-color: #47a0ff;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`
