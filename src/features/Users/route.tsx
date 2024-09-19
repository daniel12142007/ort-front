import { Outlet } from "react-router-dom";
import { UserList } from "./ui";
import { UserDetail } from "./ui/userDetail";


export const UsersRouter = {
  path: "user",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <UserList/>,
    },
    {
      path: ":userId",
      element: <UserDetail/>,
    }
  ],
};
