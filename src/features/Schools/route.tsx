import { Outlet } from "react-router-dom"
import { Schools } from "./ui"

export const SchoolsRouter = {
  path: "/admin/schools",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <Schools/>,
    },
  ],
}
