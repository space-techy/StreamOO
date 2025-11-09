import { createHashRouter } from "react-router-dom";
import ErrorPage from "../pages/error";
import ProtectedRoutes from "./protectedRoute";
import Home from "../pages/home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LogoutWay from "../pages/Log_out";
import VideoPlayer from "../components/VideoPlayer";
import Account from "../components/Account";
import MovieUploader from "../components/MovieUploader";
import Movies from "../components/Movies";

const router = createHashRouter([
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
    {
        path: "/temp_video",
        element: <VideoPlayer />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/account",
        element: <Account />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/upload",
        element: <MovieUploader />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/movies",
        element: <Movies />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/tvshows",
        element: <Movies />,
        errorElement: <ErrorPage />,
    },
]);

export default router;
