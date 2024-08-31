import { Navigate } from "react-router-dom";
import TokenService from "@/utils";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = TokenService.getToken();

  if (!token) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;
