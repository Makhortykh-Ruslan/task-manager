import React from 'react';
import './app-header.css'

const AppHeader = ({liked, allPosts}) =>{
    return(
        <div className='app-header d-flex'>
            <h1>Task Manager</h1>
            <h2> {allPosts} all posts, like to {liked}</h2>
        </div>
    )
}

export default AppHeader