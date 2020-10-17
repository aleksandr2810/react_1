import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {
let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let postsElements =props.posts.map(p => <Post mased={p.massed} l={p.l}/>);
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>

            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}

export default Myposts;