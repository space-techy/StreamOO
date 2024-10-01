import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Login from "./login";
import Register from "./register";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />,
    }
]);

export default router;