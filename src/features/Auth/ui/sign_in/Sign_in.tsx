import { useState } from "react";
import { AuthButton, Container, FormStyled, LogInContainer, Title } from "../../style/style";
import { LoaderDots } from "@/shared/ui";
import { MyInput } from "@/shared/ui/MyInput";
import { MyPasswordInput } from "@/shared/ui/MyPasswordInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginReq } from "../../type";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../model/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignIn = () => {
  const navigate = useNavigate();
  const signIn = useAuthStore((state) => state.signIn);
  const notify = (message: string) => toast(message);
  const [isLoading, setLoading] = useState<boolean>(false);
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
  });

  const onSubmit: SubmitHandler<LoginReq> = async (data) => {
    setLoading(true);
    try {
      const { status, message } = await signIn(data, navigate);
      if (status === "error") {
        setError("password", { type: "custom", message: message });
      }
      notify(message);
      setLoading(false);
    } catch (err) {
      setError("password", { type: "custom", message: "Неверный логин или пароль." });
      setLoading(false);
    }
  };

  return (
    <Container>
      <LogInContainer>
        <Title>Вход</Title>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <MyInput register={register("email")} name="email" label="Логин*" type="email" />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

          <MyPasswordInput register={register("password")} name="password" label="Пароль*" type="password" />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

          <AuthButton fullWidth type="submit">
            {isLoading ? <LoaderDots /> : "Войти"}
          </AuthButton>
        </FormStyled>
      </LogInContainer>
    </Container>
  );
};
