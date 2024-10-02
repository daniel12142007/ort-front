import AuthWrapper from "../AuthWrapper"
import { Btn, Flex, Form, Title } from "../../style/style"
import { useForm } from "react-hook-form"
import { useAuthStore } from "../model/store"
import { useNavigate } from "react-router-dom"
import { MyInput } from "@/shared/ui/MyInput"
import { MyPasswordInput } from "@/shared/ui/MyPasswordInput"
import { NewPasswordState } from "../../type"

export const NewPassword = () => {
  const navigate = useNavigate()
  const fetchEmail = useAuthStore((state) => state.resetPassword)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordState>({})

  const onSubmit = (data: NewPasswordState) => {
    fetchEmail(data, navigate)
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
          <Btn>Срос пароля</Btn>
        </Flex>
      </Form>
    </AuthWrapper>
  )
}
