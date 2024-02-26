import { useAuthContext } from "../../../hooks/useAuthContext";
import LandingPage from "../../../pages/LandingPage/LandingPage";

export const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
    const { token } = useAuthContext();
    return !token ? element : <LandingPage/>;
 };