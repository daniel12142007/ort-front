import { Outlet } from "react-router-dom";
import TestConstructor from "./ui";
import CreateTest from "./ui/create-test/CreateTest";

export const TestConstructorRouter = {
  path: "test-constructor/",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <TestConstructor />,
    },
    {
      path: "create-test/:itemType",
      element: <CreateTest />,
    },
  ],
};
