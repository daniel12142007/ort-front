import { Outlet } from "react-router-dom";
import { UserList } from "./ui/list";
import { UserDetail } from "./ui/details/userDetail";


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
