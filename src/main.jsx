import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root.jsx'
import Dashboard from './routes/Dashboard.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
