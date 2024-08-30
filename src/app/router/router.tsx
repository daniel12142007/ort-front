import { AuthRouter } from "@/features/Auth";
import { Layout } from "@/widgets";
import { MainDashboard } from "@/widgets/MainDashboard/MainDashboard";
import { useRoutes } from "react-router";
import { TestConstructorRouter } from "@/features/TestConstructor";

export const MyRoutes = () => {
  return useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainDashboard />,
        },
        {
          path: "/testing",
          element: <MainDashboard />,
        },
        {
          path: "/user",
          element: <MainDashboard />,
        },
        TestConstructorRouter,
      ],
    },
    AuthRouter,
  ]);
};
