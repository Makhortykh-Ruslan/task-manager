import React from 'react';
import './post-list-item.css'


const PostListItem = ({label, important, like,  onDeleted, onToggleImportant, onToggleLiked}) =>{

    let classNameActive = 'app-list-item d-flex justify-content-between';
    if(important){
        classNameActive += ' important';
    }

    if(like){
        classNameActive += ' like';
    }


    return(
        <div className={classNameActive}>
            <span onClick={onToggleLiked} className='app-list-item-label'>
                {label}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={onToggleImportant} type='button' className='btn-star btn-sm'>
                    <i className='fa fa-star'></i>
                </button>
                <button onClick={onDeleted} type='button' className='btn-trash btn-sm'>
                    <i className='fa fa-trash-o'></i>
                </button>
                <i className='fa fa-heart'></i>
            </div>
        </div>
    )
}
export default PostListItem
