import { Outlet } from "react-router-dom"
import TestConstructor from "./ui"
import CreateTest from "./ui/create-test/CreateTest"
import TestList from "./ui/test-list"

export const TestConstructorRouter = {
  path: "/admin",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <TestConstructor />,
    },
    {
      path: "/admin/test-list/:itemId",
      element: <TestList />,
    },
    {
      path: "/admin/test-list/:itemId/create-test",
      element: <CreateTest />,
    },
  ],
}
