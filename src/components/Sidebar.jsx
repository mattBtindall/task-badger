import classes from './Sidebar.module.scss'
import logo from '/badger.png'

export default function Sidebar() {
    return (
        <aside className={classes.sidebar}>
            <div className={classes.sidebarLeft}>
                <img src={logo} alt="" className={classes.sidebarLogo}/>
            </div>
            <div className={classes.sidebarRight}>
                <p>sidebar right</p>
            </div>
        </aside>
    )
}
