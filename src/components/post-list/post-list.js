import React from 'react';
import PostListItem from '../post-list-item'
import './post-list.css'
import { v4 as uuidv4 } from 'uuid';

const PostList = ({posts, onDeleted, onToggleImportant, onToggleLiked}) => {


    const elements =  posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li  key={uuidv4()} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">{elements}</ul>
    )
}

export default PostList;