import { useAuthContext } from "../../../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ element }: { element: React.ReactNode }) => {
    const { token } = useAuthContext();
    if (token) {
      return <Navigate to='/'/>;
    }
    return element;
  };