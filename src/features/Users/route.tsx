import { Outlet } from "react-router-dom";
import { UserList } from "./ui";


export const UsersRouter = {
  path: "user",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <UserList/>,
    },
  ],
};
