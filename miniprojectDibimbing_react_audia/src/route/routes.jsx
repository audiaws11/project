
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import ListUser from "../pages/listuser/ListUser";
import ProtectedRoute from "./ProtectedRoute";
import DetailUser from "../pages/detailuser/DetailUser";

export const routeList = [
    {
        path: "/",
        element: <Home />,
    },
   
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {   
        
        path: "/listuser",
        element: (
        <ProtectedRoute>
            <ListUser />
        </ProtectedRoute>
        ),
    },
    {   
        
        path: "/detailuser/:id",
        element: (
        <ProtectedRoute>
            <DetailUser />
        </ProtectedRoute>
        ),
    },
]