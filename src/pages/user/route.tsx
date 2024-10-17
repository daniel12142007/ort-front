import { Outlet } from "react-router-dom"
import { TrialTestingRoute } from "@/features/trial-testing"
import { UserProfileRouter } from "@/features/user-profile"
import { MainPage } from "./main/MainPage"
import { BreadCrumbs } from "@/shared/ui"
import { Header } from "@/widgets/Header/Header"
import { TrainingTestRoute } from "@/features/TrainingTest"
import { PaymentRoute } from "@/features/payment"

export const UserRoute = {
  path: "/main",
  element: (
    <div className="flex flex-col min-h-screen items-center gap-2 bg-gradient-to-br from-[#cee8ff] via-[#e0f6ff] to-[#ffffff]">
      <Header />
      <BreadCrumbs />
      <div className="flex-grow w-full">
        <Outlet />
      </div>
    </div>
  ),
  children: [
    {
      path: "",
      element: <MainPage />,
    },
    TrialTestingRoute,
    UserProfileRouter,
    TrainingTestRoute,
    PaymentRoute,
  ],
}
