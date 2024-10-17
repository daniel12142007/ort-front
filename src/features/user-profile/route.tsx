import { Outlet } from "react-router-dom"
import Profile from "./ui/profile"
import ArchiveList from "./ui/TestArchive/ArchiveList"
import FullArchive from "./ui/TestArchive/FullArchive"

export const UserProfileRouter = {
  path: "profile",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <Profile />,
    },
    {
      path: "archive",
      element: <ArchiveList />,
    },
    {
      path: "archive/:archiveName",
      element: <FullArchive />,
    },
  ],
}
