import { Outlet } from "react-router-dom";
import TestConstructor from "./ui";
import CreateTest from "./ui/create-test/CreateTest";
import TestList from "./ui/test-list";

export const TestConstructorRouter = {
  path: "",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <TestConstructor />,
    },
    {
      path: "test-list/:itemType",
      element: <TestList />,
    },
    {
      path: "test-list/:itemType/create-test",
      element: <CreateTest />,
    },
  ],
};
