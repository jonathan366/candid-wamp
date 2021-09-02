import * as React from "react";
import './PostList.css';
import { CATEGORIES, capitalizeFirstLetter } from "../constants";
import Post from "./Post";

function PostList(props) {

    const [category, setCategory] = React.useState('all');
    const isAllCat = category === 'all';

    const catChangeHandler = (e) => {
        setCategory(e.target.value);
    }

    return (
        <div className='postlist-container'>
            <div className='pl-header'>
                <div><h2>Posts</h2></div>
                <div>
                    <select className='pl-category' value={category} onChange={catChangeHandler}>
                        <option key='all' value='all'>All</option>
                        {CATEGORIES.map(cat => <option key={cat} value={cat}>{capitalizeFirstLetter(cat)}</option>)}
                    </select>
                </div>
            </div>

            <div className='main-pl'>

            </div>
            <div>
                {isAllCat && props.posts.map(post => <Post post={post} key={post.title} />)}
                {!isAllCat && props.posts.filter(post => post.category === category)
                    .map(post => <Post post={post} key={post.title} />)}
            </div>
        </div>
    )
}

export default PostList;