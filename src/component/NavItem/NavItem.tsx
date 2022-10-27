import {Link} from "react-router-dom";
import s from './NavItem.module.scss';
import {NavItemProps} from './NavItem.types';

export const NavItem = (props: NavItemProps) => {

    const LinkItem = (
        <>
            {<props.icon />}
            <span>
                {props.name}
            </span>
        </>
    )

    return (
        <Link to={props.path} className={s.item} >
            {LinkItem}
        </Link>
    )
}