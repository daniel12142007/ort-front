import { Outlet } from "react-router-dom"
import { TrialTestingRoute } from "@/features/trial-testing"
import { MainPage } from "./main/MainPage"
import { BreadCrumbs } from "@/shared/ui"
import { Header } from "@/widgets/Header/Header"
import { PaymentRoute } from "@/features/payment"

export const UserRoute = {
  path: "main",
  element: (
    <div className="flex flex-col min-h-screen items-center gap-2 bg-[#e0f6ff]">
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
    PaymentRoute,
  ],
}
