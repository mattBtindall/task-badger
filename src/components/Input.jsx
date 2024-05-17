import classes from './Input.module.scss'

export default function Input({children, text}) {
    return (
        <div className={`${classes.text} ${classes.active}`}>
            {children}
            <input type="text" className={classes.textInput} placeholder={text}/>
        </div>
    )
}
