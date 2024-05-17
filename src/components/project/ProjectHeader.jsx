import { NavLink } from "react-router-dom"
import classes from './ProjectHeader.module.scss'
import RocketIcon from '../../assets/images/icons/rocket-fill.svg?react';

export default function ProjectHeader({iconUrl, name, link}) {
    const withoutLink = <>
        {
            iconUrl ?
                <img src={iconUrl} alt={name} className={classes.projectHeaderImage} /> :
                <span className={classes.projectHeaderImage}>
                    <RocketIcon className={classes.projectHeaderImageIcon} />
                </span>
        }
        <span className={classes.projectHeaderText}>{name}</span>
    </>

    if (link) {
        return (
            <NavLink to={`project/${link}`} className={classes.projectHeader}>
                {withoutLink}
            </NavLink>
        )
    }

    return <span className={classes.projectHeader}>
        {withoutLink}
    </span>
}
