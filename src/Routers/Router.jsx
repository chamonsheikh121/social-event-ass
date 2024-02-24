import { createBrowserRouter, Outlet } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Contact from "../Pages/Contact/Contact";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DetailsPrivate from "../PrivateRouter/DetailsPrivate";
import DashboardPrivate from "../PrivateRouter/DashboardPrivate";
import { element } from "prop-types";
import Profile from "../Pages/ProfilePage/Profile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
            <Root></Root>
            <Outlet></Outlet>
        </div>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: `/details/:id`,
                element: <DetailsPrivate><EventDetails></EventDetails></DetailsPrivate>,
                loader: () => fetch("./../../public/Events.json")

            },
            {
                path: "/dashboard",
                element: <DashboardPrivate><Dashboard></Dashboard></DashboardPrivate>,
                // loader:()=>fetch('../../public/Events.json')
            },
            {
                path:"/profile",
                element:<Profile></Profile>
            }
        ]

    }
])


export default router;