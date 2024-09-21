import styled from "@emotion/styled"

export const Background = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 70%,
    rgba(64, 123, 255, 1) 70%
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`
export const FormInput = styled.input`
  border-radius: 8px;
  border: 1px solid #000000;
  outline: none;
  padding: 11px 15px;
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
`
export const Label = styled.label`
  font-size: 16px;
  color: #00000080;
`
export const Logo = styled.img`
  width: 200px;
  margin-top: 40px;
  z-index: 2;
`
export const FormWrapper = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-top: 20px;
  z-index: 1;
`
export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
`
export const ForgotPasswordLink = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #407bff;
  margin-top: 15px;
  text-align: right;
  width: 100%;
`
export const Btn = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#858fb1" : "#3E5ECF")};
  border: 1px solid ${({ disabled }) => (disabled ? "#858fb1" : "#3E5ECF")};
  width: 50%;
  border-radius: 10px;
  color: white;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #5870c6;
    border: 1px solid #5870c6;
    cursor: pointer;
  }
`
export const Flex = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
`
export const Form = styled.form`
  width: 100%;
`
