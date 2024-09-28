import { Outlet } from "react-router-dom"
import { TrialTestingRoute } from "@/features/trial-testing"
import { MainPageRoute } from "./main"
import { BreadCrumbs } from "@/shared/ui"

export const UserRoute = {
  path: "/main",
  element: (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 20px",
        backgroundColor: "#e0f6ff",
        height: "100vh",
      }}
    >
      <BreadCrumbs />
      <Outlet />
    </div>
  ),
  children: [MainPageRoute, TrialTestingRoute],
}
