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
import ReviewDetails from "../../Pages/ReviewDetails/ReviewDetails";
import EditReview from "../../Pages/EditPage/EditReview";
import MyFavorites from "../../Pages/Favorite/MyFavorites";

export const router=createBrowserRouter([
    {path:'/',
        Component:Root,
        errorElement:<Error404></Error404>,
        children:[
            {index:true,
                loader:()=>fetch('https://local-food-lover-server-3000.vercel.app/topRating'),
                Component:Home
            },
            {
                path:'allReviews',
                loader:()=>fetch('https://local-food-lover-server-3000.vercel.app/allReviews'),
                Component: AllReviews
            },
            {
                path:'allReviews/:id',
                loader:({params})=>fetch(`https://local-food-lover-server-3000.vercel.app/allReviews/${params.id}`),
                element: <ReviewDetails></ReviewDetails>
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
                path:'/favorites',
                element:<PrivateRoute>
                    <MyFavorites></MyFavorites>
                    </PrivateRoute>
            },
            {
                path:'edit-review/:id',
                loader:({params})=>fetch(`https://local-food-lover-server-3000.vercel.app/allReviews/${params.id}`),
                element: <PrivateRoute>
                    <EditReview></EditReview>
                </PrivateRoute>
            },
            {
                path:'*',
                Component:Error404
            }
        ]
    }
])