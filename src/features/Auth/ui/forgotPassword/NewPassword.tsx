import AuthWrapper from "../AuthWrapper"
import { Btn, Flex, Form, Title } from "../../style/style"
import { useForm } from "react-hook-form"
import { useAuthStore } from "../model/store"
import { useNavigate, useLocation } from "react-router-dom"
import { MyInput } from "@/shared/ui/MyInput"
import { MyPasswordInput } from "@/shared/ui/MyPasswordInput"
import { NewPasswordState } from "../../type"
import { toast } from "react-toastify"
import { LoaderDots } from "@/shared/ui"
import React from "react"

export const NewPassword = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoading, setLoading] = React.useState(false)
  const notify = (message: string, type: "success" | "error") =>
    toast[type](message)
  const fetchEmail = useAuthStore((state) => state.resetPassword)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordState>({
    defaultValues: {
      email: location.state?.email,
      newPassword: "",
      confirmPassword: "",
    },
  })

  const onSubmit = async (data: NewPasswordState) => {
    setLoading(true)
    try {
      if (data.newPassword !== data.confirmPassword) {
        notify("Пароли не совпадают", "error")
        setLoading(false)
        return
      }
      const { status, message } = await fetchEmail(data, navigate)
      if (status === "success") {
        notify(message, status)
      }
      setLoading(false)
    } catch (err) {
      notify("Неверный адрес электронной почты", "error")
      setLoading(false)
    }
  }

  return (
    <AuthWrapper>
      <Title>Установите новый пароль</Title>

      <p>
        Создайте новый пароль. Убедитесь, что он отличается от предыдущие для
        безопасности Подтверждать
      </p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MyInput
          register={register("email")}
          name="email"
          label="Ваш адрес электронной почты"
          type="email"
          placeholder="Введите ваш адрес электронной почты"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <MyPasswordInput
          register={register("newPassword")}
          name="newPassword"
          label="Пароль*"
          type="newPassword"
        />
        {errors.newPassword && (
          <p style={{ color: "red" }}>{errors.newPassword.message}</p>
        )}

        <MyPasswordInput
          register={register("confirmPassword")}
          name="confirmPassword"
          label="Повторите пароль*"
          type="confirmPassword"
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
        )}

        <Flex>
          <Btn>{isLoading ? <LoaderDots /> : "Сменить пароль"}</Btn>
        </Flex>
      </Form>
    </AuthWrapper>
  )
}
