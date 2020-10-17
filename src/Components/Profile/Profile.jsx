import React from 'react';
import Myposts from './Mypost/Myposts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
        <ProfileInfo/>
        <Myposts posts={props.state.posts} addPost={props.addPost}/>
    </div>
    )
}

export default Profile;