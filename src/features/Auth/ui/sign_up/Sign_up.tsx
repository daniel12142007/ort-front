import { useState } from "react"
import { Btn, Title, ForgotPasswordLink, Form, Flex } from "../../style/style"
import { LoaderDots } from "@/shared/ui"
import { MyInput } from "@/shared/ui/MyInput"
import { MyPasswordInput } from "@/shared/ui/MyPasswordInput"
import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterReq } from "../../type"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../model/store"
import { toast } from "react-toastify"
import AuthWrapper from "../AuthWrapper"

export const SignUp = () => {
  const navigate = useNavigate()
  const signUp = useAuthStore((state) => state.signUp)
  const notify = (message: string, type: "success" | "error") =>
    toast[type](message)

  const [isLoading, setLoading] = useState<boolean>(false)
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<RegisterReq>({
    defaultValues: {
      schoolId: 0,
      fullName: "",
      age: 0,
      email: "",
      passwordOne: "",
      passwordTwo: "",
    },
  })

  const onSubmit: SubmitHandler<RegisterReq> = async (data) => {
    setLoading(true)
    try {
      console.log(data)
      const res: string[] | null = await signUp(data, navigate)
      if (res) {
        const processedKeys = new Set<string>()

        res.forEach((errorString) => {
          const [key, message] = errorString.split(": ")
          if (key && message) {
            const trimmedKey = key.trim()
            const trimmedMessage = message.trim()

            if (!processedKeys.has(trimmedKey)) {
              setError(trimmedKey as keyof typeof data, {
                type: "custom",
                message: trimmedMessage,
              })
              processedKeys.add(trimmedKey)
            }
          }
        })
        notify("Ошибки при регистрации", "error")
      }
      notify("Регистрация прошла успешно", "success")
      setLoading(false)
    } catch (err) {
      setError("passwordOne", {
        type: "custom",
        message: "Неверный логин или пароль.",
      })
      setLoading(false)
    }
  }

  return (
    <AuthWrapper>
      <Title>Регистрация</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MyInput
          register={register("fullName")}
          name="fullName"
          label="ФИО*"
          type="fullName"
        />
        {errors.fullName && (
          <p style={{ color: "red" }}>{errors.fullName.message}</p>
        )}

        <MyInput
          register={register("age")}
          name="age"
          label="Возраст*"
          type="age"
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}

        <MyInput
          register={register("email")}
          name="email"
          label="Логин*"
          type="email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <MyPasswordInput
          register={register("passwordOne")}
          name="passwordOne"
          label="Пароль*"
          type="passwordOne"
        />
        {errors.passwordOne && (
          <p style={{ color: "red" }}>{errors.passwordOne.message}</p>
        )}

        <MyPasswordInput
          register={register("passwordTwo")}
          name="passwordTwo"
          label="Повторите пароль*"
          type="passwordTwo"
        />
        {errors.passwordTwo && (
          <p style={{ color: "red" }}>{errors.passwordTwo.message}</p>
        )}

        <ForgotPasswordLink>
          <Link to="/auth/sign-in">У меня уже есть аккаунт</Link>
        </ForgotPasswordLink>

        <Flex>
          <Btn>{isLoading ? <LoaderDots /> : "Зарегистрироваться"}</Btn>
        </Flex>
      </Form>
    </AuthWrapper>
  )
}
