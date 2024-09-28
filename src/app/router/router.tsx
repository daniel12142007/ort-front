import { AuthRouter } from "@/features/Auth"
import { Layout } from "@/widgets"
import { useRoutes } from "react-router"
import { TestConstructorRouter } from "@/features/TestConstructor"
import ProtectedRoute from "@/shared/ui/ProtectedRoute"
import { UsersRouter } from "@/features/Users/route"
import { Lending } from "@/pages/landing"
import { UserRoute } from "@/pages/user"

export const MyRoutes = () => {
  return useRoutes([
    {
      path: "",
      element: <Lending />,
    },
    {
      path: "admin",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [TestConstructorRouter, UsersRouter],
    },
    UserRoute,
    AuthRouter,
  ])
}
