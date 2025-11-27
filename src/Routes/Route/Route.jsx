import { createBrowserRouter } from "react-router";
import Root from "../../RootLayout/Root";
import Home from "../../Pages/Home/Home";
import AllReviews from "../../components/AllReviews/AllReviews";
import Login from "../../Pages/Authentication/Login";
import Register from "../../Pages/Authentication/Register";

export const router=createBrowserRouter([
    {path:'/',
        Component:Root,
        children:[
            {index:true,
                Component:Home
            },
            {
                path:'allReviews',
                Component: AllReviews
            },
            {
                path:'login',
                Component:Login
            },
            {
                path:'register',
                Component:Register
            }
        ]
    }
])