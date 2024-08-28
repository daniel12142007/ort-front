import { AuthRouter } from "@/features/Auth";
import { TestConstructorRouter } from "@/features/TestConstructor";
import { Layout } from "@/widgets";
import { useRoutes } from "react-router";

export const MyRoutes = () => {
  return useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [TestConstructorRouter],
    },
    AuthRouter,
  ]);
};
