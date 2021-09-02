import './Post.css';
import * as React from "react";

function Post(props) {
    return (
        <div className='ind-post'>
            <div>
                <h3><a target='_blank' rel='noopener noreferrer' href={props.post.url}>{props.post.title}</a></h3>
            </div>
            <p className='ip-time'>{props.post.timestamp.toDateString()}</p>
            <p className='ip-description'>{props.post.description}</p>
        </div>
    )
}

export default Post;