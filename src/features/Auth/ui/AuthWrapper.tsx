import React from "react"
import { Background, Logo, FormWrapper } from "../style/style"
import logo from "../../../shared/assets/icon/logo.svg"

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Background>
      <Logo src={logo} alt="Company Logo" />
      <FormWrapper>{children}</FormWrapper>
    </Background>
  )
}

export default AuthWrapper
