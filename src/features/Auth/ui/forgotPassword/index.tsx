import { MyInput } from "@/shared/ui/MyInput"
import AuthWrapper from "../AuthWrapper"
import { Btn, Flex, Form, Title } from "../../style/style"
import { useForm } from "react-hook-form"
import { useAuthStore } from "../model/store"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { LoaderDots } from "@/shared/ui"

import React from "react"

export const ForgotPassword = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false)
  const notify = (message: string, type: "success" | "error") =>
    toast[type](message)
  const fetchEmail = useAuthStore((state) => state.findEmail)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({})

  const onSubmit = async (data: { email: string }) => {
    setLoading(true)
    try {
      const { status, message } = await fetchEmail(data.email, navigate)
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
          <Btn>{loading ? <LoaderDots /> : "Сбросить пароль"}</Btn>
        </Flex>
      </Form>
    </AuthWrapper>
  )
}
