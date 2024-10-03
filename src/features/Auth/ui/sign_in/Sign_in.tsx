import { useState } from "react"
import { Btn, Flex, Title, ForgotPasswordLink, Form } from "../../style/style"
import { LoaderDots } from "@/shared/ui"
import { MyInput } from "@/shared/ui/MyInput"
import { MyPasswordInput } from "@/shared/ui/MyPasswordInput"
import { SubmitHandler, useForm } from "react-hook-form"
import { LoginReq } from "../../type"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../model/store"
import { toast } from "react-toastify"
import AuthWrapper from "../AuthWrapper"

export const SignIn = () => {
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
        setError("password", { type: "custom", message })
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
    <AuthWrapper>
      <Title>Авторизация</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MyInput
          register={register("email")}
          name="email"
          label="Логин*"
          type="email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <MyPasswordInput
          register={register("password")}
          name="password"
          label="Пароль*"
          type="password"
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}

        <Link to="/auth/forgot-password">
          <ForgotPasswordLink>Забыли пароль?</ForgotPasswordLink>
        </Link>

        <Flex>
          <>
            <Btn>{isLoading ? <LoaderDots /> : "Войти"}</Btn>
            <Btn>Регистрация</Btn>
          </>
        </Flex>
      </Form>
    </AuthWrapper>
  )
}
