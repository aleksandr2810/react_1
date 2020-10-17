import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <div><img src='https://www.sfx-tula.ru/upload/medialibrary/df0/df01862674512d2682fcc3816868d162.png'></img>
        </div>
        <div className={s.social}>My Fist social</div>
    </header>
}

export default Header;