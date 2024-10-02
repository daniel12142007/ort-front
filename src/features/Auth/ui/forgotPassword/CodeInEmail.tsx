import AuthWrapper from "../AuthWrapper"
import { Btn, Flex, Form, Title } from "../../style/style"
import { useForm } from "react-hook-form"
import { useAuthStore } from "../model/store"
import { useNavigate, useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import { LoaderDots } from "@/shared/ui"
import React from "react"

export const CodeInEmail = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoading, setLoading] = React.useState(false)
  const notify = (message: string, type: "success" | "error") =>
    toast[type](message)
  const fetchEmail = useAuthStore((state) => state.codeEmail)
  const { handleSubmit } = useForm<{ email: string; code: number }>()
  const [code, setCode] = React.useState<string[]>(["", "", "", "", ""])
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

  const onSubmit = async () => {
    setLoading(true)
    try {
      const { status, message } = await fetchEmail(
        { code: Number(code.join("")), email: location.state?.email },
        navigate,
      )
      if (status === "success") {
        notify(message, status)
      }
      setLoading(false)
    } catch (err) {
      notify("Неверный код", "error")
      setLoading(false)
    }
  }

  const handleInputChange = (value: string, index: number) => {
    if (/^\d$/.test(value) || value === "") {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      if (value && index < 4) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <AuthWrapper>
      <Title>Проверьте свою электронную почту</Title>

      <p>Мы отправили ссылку для сброса на адрес {location.state?.email}</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex space-x-2 justify-center py-5 m-auto">
          {code.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleInputChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          ))}
        </div>

        <Flex>
          <Btn>{isLoading ? <LoaderDots /> : "Подтвердить"}</Btn>
        </Flex>
      </Form>
    </AuthWrapper>
  )
}
