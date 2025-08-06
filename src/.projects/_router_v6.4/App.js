import React from 'react'
import Home from "./pages/Home"
import User, { /*loader as getAllUserLoader */} from "./pages/User"
import UserDetail ,{ loader as getUserDetailLoader } from "./pages/UserDetail"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getAllUser as getAllUserLoader} from "./services/apiUsers";

import AppLayout from './pages/AppLayout'
import Error from './components/Error'
const router = createBrowserRouter([
    {
        element: <AppLayout />,
    errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/user",
                element: <User />,
                loader: getAllUserLoader,
            },
            {
                path: "/user/:id",
                element: <UserDetail />,
                loader:getUserDetailLoader,
            },
        ]
    },
])

const App = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default App