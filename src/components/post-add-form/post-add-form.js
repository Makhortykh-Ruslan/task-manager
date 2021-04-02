import React, {useState} from 'react';
import './post-add-form.css'

const PostAddForm = ({addNewElements}) =>{
    const [inputState, setInputState] = useState({
        text: ''
    });

    const onChange = (event) =>{
        setInputState({text: event.target.value})
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        addNewElements(inputState.text)
        setInputState({text: ''})
    }

    return(
        <form className='bottom-panel d-flex' onSubmit={onSubmit} >
            <input
                onChange={onChange}
                type="text"
                placeholder='What are you thinking about now?'
                className='form-control new-post-label'
                value={inputState.text}
            />

                <button
                     type='submit'
                     className='btn btn-outline-secondary'
                 >Add</button>

        </form>

    )
}
export default PostAddForm
