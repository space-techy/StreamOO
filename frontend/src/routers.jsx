import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import ProtectedRoutes from "./auth/protectedRoute";
import Login from "./Login";
import Register from "./Register";
import Home from "./pages/home";
import LogoutWay from "./Log_out";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoutes>
                <Home />
            </ProtectedRoutes>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/logout",
        element: <LogoutWay />,
        errorElement: <ErrorPage />,
    }
    ,
    {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />,
    },
]);

export default router;