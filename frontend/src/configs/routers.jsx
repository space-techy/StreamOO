import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error";
import ProtectedRoutes from "./protectedRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/home";
import LogoutWay from "../pages/Log_out";

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