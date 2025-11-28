import { createBrowserRouter } from "react-router";
import Root from "../../RootLayout/Root";
import Home from "../../Pages/Home/Home";
import AllReviews from "../../components/AllReviews/AllReviews";
import Login from "../../Authentication/Login";
import Register from "../../Authentication/Register";
import Addreview from "../../components/AddReview/Addreview";
import MyReview from "../../components/MyReview/MyReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error404 from "../../Pages/404Error/Error404";

export const router=createBrowserRouter([
    {path:'/',
        Component:Root,
        children:[
            {index:true,
                loader:()=>fetch('http://localhost:3000/topRating'),
                Component:Home
            },
            {
                path:'allReviews',
                loader:()=>fetch('http://localhost:3000/allReviews'),
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
            },
            {
                path:'*',
                Component:Error404
            }
        ]
    }
])