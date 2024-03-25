import { ReactNode } from "react";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children }: TProtectedRoute) => {
  return children;
};

export default ProtectedRoute;
