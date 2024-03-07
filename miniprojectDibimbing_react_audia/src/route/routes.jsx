
import Register from "../pages/Register";
import Login from "../pages/Login";
import ListUser from "../pages/ListUser";
import ProtectedRoute from "./ProtectedRoute";
import DetailUser from "../pages/DetailUser";

export const routeList = [
   
    {
        path: "/",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {   
        
        path: "/listuser",
        element: <ProtectedRoute><ListUser /></ProtectedRoute>,
    },
    {   
        
        path: "/detailuser",
        element: <ProtectedRoute><DetailUser /></ProtectedRoute>,
    },
]