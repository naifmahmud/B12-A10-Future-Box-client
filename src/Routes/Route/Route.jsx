import { createBrowserRouter } from "react-router";
import Root from "../../RootLayout/Root";
import Home from "../../Pages/Home/Home";
import AllReviews from "../../components/AllReviews/AllReviews";
import Login from "../../Authentication/Login";
import Register from "../../Authentication/Register";
import Addreview from "../../components/AddReview/Addreview";
import MyReview from "../../components/MyReview/MyReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            },
            {
                path:'addReview',
                element: 
                <PrivateRoute>
                    <Addreview></Addreview>
                </PrivateRoute>
            },
            {
                path:'myReview',
                element:<PrivateRoute>
                    <MyReview></MyReview>
                </PrivateRoute>
            }
        ]
    }
])