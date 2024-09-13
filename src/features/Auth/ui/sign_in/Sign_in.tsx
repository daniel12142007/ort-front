import { useState } from "react"
import {
  AuthButton,
  Btn,
  Container,
  Flex,
  FormStyled,
  LogInContainer,
  Title,
} from "../../style/style"
import { LoaderDots } from "@/shared/ui"
import { MyInput } from "@/shared/ui/MyInput"
import { MyPasswordInput } from "@/shared/ui/MyPasswordInput"
import { SubmitHandler, useForm } from "react-hook-form"
import { LoginReq } from "../../type"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../model/store"
import { toast } from "react-toastify"

export const SignIn = ({ isAdmin }) => {
  const navigate = useNavigate()
  const signIn = useAuthStore((state) => state.signIn)
  const notify = (message: string, type: "success" | "error") =>
    toast[type](message)

  const [isLoading, setLoading] = useState<boolean>(false)
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<LoginReq>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<LoginReq> = async (data) => {
    setLoading(true)
    try {
      const { status, message } = await signIn(data, navigate)
      if (status === "error") {
        setError("password", { type: "custom", message: message })
      }
      notify(message, status)
      setLoading(false)
    } catch (err) {
      setError("password", {
        type: "custom",
        message: "Неверный логин или пароль.",
      })
      setLoading(false)
    }
  }

  return (
    <div style={{ backgroundColor: "#407BFF", height: "250px" }}>
      <div></div>
      <Container>
        <LogInContainer>
          <Title>Вход</Title>
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <MyInput
              register={register("email")}
              name="email"
              label="Логин*"
              type="email"
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}

            <MyPasswordInput
              register={register("password")}
              name="password"
              label="Пароль*"
              type="password"
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
            {isAdmin ? (
              <AuthButton fullWidth type="submit">
                {isLoading ? <LoaderDots /> : "Войти"}
              </AuthButton>
            ) : (
              <Flex>
                <Btn>{isLoading ? <LoaderDots /> : "Войти"}</Btn>
                <Btn>Регистрация</Btn>
              </Flex>
            )}
          </FormStyled>
        </LogInContainer>
      </Container>
    </div>
  )
}
