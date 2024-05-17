import classes from './Sidebar.module.scss'
import logo from '/badger.png'
import { NavLink } from 'react-router-dom'
import Icon from './Icon.jsx'
import iconClasses from './Icon.module.scss'
import SearchIcon from '../assets/images/icons/search.svg?react';
import RocketIcon from '../assets/images/icons/rocket-fill.svg?react';
import PinIcon from '../assets/images/icons/pin-fill.svg?react';
import FilterIcon from '../assets/images/icons/filter.svg?react';
import ProjectHeader from './project/ProjectHeader.jsx'
import { data } from '../fakeData.js'
import Input from './Input.jsx'
import inputClasses from './Input.module.scss'

export default function Sidebar() {
    const projects = data.map(project => <li key={project.id}>
        <ProjectHeader iconUrl={project.image} name={project.name} link={project.id} />
    </li>)

    return (
        <aside className={classes.sidebar}>
            <div className={classes.sidebarLeft}>
                <NavLink to='/dashboard' className={classes.sidebarLogo}>
                    <img src={logo} alt="task badger logo" />
                </NavLink>
                <Icon className={`${iconClasses.icon} ${iconClasses.iconSidebar}`}>
                    <SearchIcon />
                </Icon>
                <div className={classes.sidebarModes}>
                    <Icon className={`${iconClasses.icon} ${iconClasses.iconSidebar} ${iconClasses.active}`}>
                        <RocketIcon />
                    </Icon>
                    <Icon className={`${iconClasses.icon} ${iconClasses.iconSidebar}`}>
                        <PinIcon />
                    </Icon>
                </div>
            </div>
            <div className={classes.sidebarRight}>
                <div className={classes.topbar}>
                    <h2 className={classes.topbarTitle}>Projects</h2>
                    <span className={classes.topbarIcon}>+</span>
                </div>
                <Input text='Filter projects'>
                    <FilterIcon className={inputClasses.textIcon} />
                </Input>
                <div className={classes.projects}>
                    <span className={classes.projectsTitle}>My Projects</span>
                    <ul className={classes.projectsList}>
                        {projects}
                    </ul>
                </div>
            </div>
        </aside>
    )
}
