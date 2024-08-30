import { useState } from "react";
import { AuthButton, Container, FormStyled, LogInContainer, Title } from "../../style/style";
import { LoaderDots } from "@/shared/ui";
import { MyInput } from "@/shared/ui/MyInput";
import { MyPasswordInput } from "@/shared/ui/MyPasswordInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { AdminSignInState } from "../../type";
import { signIn } from "../../api";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<AdminSignInState>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<AdminSignInState> = async (data) => {
    setLoading(true);
    const { status, message } = await signIn({ data, navigate });
    if (status === "error" && message) {
      setError("password", { type: "custom", message: message });
    }
    setLoading(false);
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
