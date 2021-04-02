import React from 'react';
import {Button} from 'reactstrap';
import './post-status-filter.css'

const PostStatusFilter = ({onclicklikedAll, status}) => {


    return(
        <div className='btn-group'>
            <Button color={status ? "danger" : "primary"} onClick={onclicklikedAll}>Liked</Button>
        </div>
    )
}
export default PostStatusFilter