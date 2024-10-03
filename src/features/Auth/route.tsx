import { Outlet } from "react-router-dom"
import { SignIn, SignUp, ForgotPassword, CodeInEmail, NewPassword } from "./ui"

export const AuthRouter = {
  path: "",
  element: <Outlet />,
  children: [
    {
      path: "auth/sign-in",
      element: <SignIn />,
    },
    {
      path: "auth/sign-up",
      element: <SignUp />,
    },
    {
      path: "auth/forgot-password",
      element: <Outlet />,
      children: [
        {
          path: "",
          element: <ForgotPassword />,
        },
        {
          path: "code",
          element: <CodeInEmail />,
        },
        {
          path: "new-password",
          element: <NewPassword />,
        },
      ],
    },
  ],
}
