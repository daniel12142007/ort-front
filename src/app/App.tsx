import { BrowserRouter } from "react-router-dom"
import { MyRoutes } from "./router/router"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const App = () => {
  return (
    <BrowserRouter>
      <MyRoutes />
      <ToastContainer />
    </BrowserRouter>
  )
}
