import style from './menu.module.css'


export const Menu = (props) => {
    return(
        <>
        <nav className={style.navBar}>
            <p><a href="#s1">{props.options1}</a></p>
            <p><a href="#s2">{props.options2}</a></p>
            <p><a href={'/Contact'}>{props.options3}</a></p>
        </nav>
        </>
    )
}