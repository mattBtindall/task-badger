import Sidebar from "../components/Sidebar.jsx"
import Header from "../components/Header.jsx"
import { Outlet } from "react-router-dom"
import classes from './Root.module.scss'

export default function Root() {
    return (
        <>
            <Sidebar />
            <div className={classes.main}>
                <Header />
                <Outlet />
            </div>
        </>
    )
}
