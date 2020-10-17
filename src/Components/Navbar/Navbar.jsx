import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.tem}`}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/new' activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to ='/muz' activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/set' activeClassName={s.activeLink}>Settings</NavLink>
        </div>
    </nav >
}
export default Navbar;