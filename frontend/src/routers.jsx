import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Login from "./login";
import Register from "./register";
import Home from "./pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />,
    },
]);

export default router;