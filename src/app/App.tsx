import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./router/router";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <BrowserRouter>
      <MyRoutes />
      <ToastContainer />
    </BrowserRouter>
  );
};
