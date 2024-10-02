import AuthWrapper from "../AuthWrapper"
import { Btn, Flex, Form, Title } from "../../style/style"
import { useForm } from "react-hook-form"
import { useAuthStore } from "../model/store"
import { useNavigate, useLocation } from "react-router-dom"

export const CodeInEmail = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const fetchEmail = useAuthStore((state) => state.codeEmail)
  const { register, handleSubmit } = useForm<{ email: string; code: number }>()
  console.log(location.state?.email)
  const onSubmit = (data: { email: string; code: number }) => {
    fetchEmail({ ...data, email: location.state?.email }, navigate)
  }

  return (
    <AuthWrapper>
      <Title>Проверьте свою электронную почту</Title>

      <p>Мы отправили ссылку для сброса на адрес {location.state?.email}</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input type="number" {...register("code")} />

        <Flex>
          <Btn>Срос пароля</Btn>
        </Flex>
      </Form>
    </AuthWrapper>
  )
}
