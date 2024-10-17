import Payment from "./ui/Payment"
import { Outlet } from "react-router-dom"
import CartBlock from "./ui/CartBlock"
import Finish from "./ui/Finish"

export const PaymentRoute = {
  path: "payment",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <Payment />,
    },
    {
      path: "cart",
      element: <CartBlock />
    },
    {
      path: "checkout",
      element: <Finish />
    }
  ]
}
