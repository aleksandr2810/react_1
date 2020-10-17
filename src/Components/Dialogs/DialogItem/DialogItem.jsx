import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
             alt=""/>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>;
}
export default DialogItem;