import { MyInput } from "@/shared/ui/MyInput"
import AuthWrapper from "../AuthWrapper"
import { Btn, Flex, Form, Title } from "../../style/style"
import { useForm } from "react-hook-form"
import { useAuthStore } from "../model/store"
import { useNavigate } from "react-router-dom"

export const ForgotPassword = () => {
  const navigate = useNavigate()
  const fetchEmail = useAuthStore((state) => state.findEmail)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({})

  const onSubmit = (data: { email: string }) => {
    fetchEmail(data.email, navigate)
  }

  return (
    <AuthWrapper>
      <Title>Забыли пароль?</Title>

      <p>
        Пожалуйста, введите свой адрес электронной почты, чтобы сбросить пароль
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

        <Flex>
          <Btn>Срос пароля</Btn>
        </Flex>
      </Form>
    </AuthWrapper>
  )
}
