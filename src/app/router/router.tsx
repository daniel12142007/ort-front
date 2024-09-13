import { AuthRouter } from "@/features/Auth";
import { Layout } from "@/widgets";
import { MainDashboard } from "@/widgets/MainDashboard/MainDashboard";
import { useRoutes } from "react-router";
import { TestConstructorRouter } from "@/features/TestConstructor";
import ProtectedRoute from "@/shared/ui/ProtectedRoute";
import { UsersRouter } from "@/features/Users/route";

export const MyRoutes = () => {
  return useRoutes([
    {
      path: "",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        TestConstructorRouter,
        {
          path: "/testing",
          element: <MainDashboard />,
        },
        UsersRouter,
      ],
    },
    AuthRouter,
  ]);
};
