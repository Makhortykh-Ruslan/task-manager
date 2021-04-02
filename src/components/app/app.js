import React, {useState} from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form";
import './app.css'



const App = () =>{
    const [stateData, setStateData] = useState({
        data: [{label: 'Your list is still empty ))) You can like and mark completed tasks with an asterisk'}],
        text: ''
    })
    const [click, setClick] = useState(false)
    const onDeleted = (id) =>{
        setStateData(({data})=>{
            const index = data.findIndex((elem) => elem.id === id);
            const newArr = [...data.slice(0,index), ...data.slice(index +1)];
            return{
                data: newArr, text: ''
            }
        })
    };

    const onAddItem = (data) =>{
        const newItems = {
            label: data,
            important: false,
            id: Math.floor(Math.random() * 1000),
        }

        setStateData(({data, text})=>{
            const newData = [...data, newItems];
            return{
                data: newData, text: ''
            }
        })
    }
    const onToggleImportant = (id) =>{
        setStateData(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0,index), newItem, ...data.slice(index +1)];
            return{
                "data": newArr, text: ''
            }
        })
    }

    const onToggleLiked = (id) =>{
        setStateData(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0,index), newItem, ...data.slice(index +1)];
            return{
                data: newArr, text: ''
            }
        })
    }


    const filteredData = stateData.data.filter(item => item.label.indexOf(stateData.text) !== -1);
    const filteredLikeData = filteredData.filter(item => item.like === true);
    const allPostData = click ? (filteredLikeData.length === 0 ? filteredData : filteredLikeData) : filteredData

    const onUpdateSearch = (filter) =>{
        setStateData({...stateData, text: filter})
    }




    const {data} = stateData;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;
    return(
        <div className='app'>
            <AppHeader liked={liked} allPosts={allPosts}/>
            <div className='search-panel d-flex'>
                <SearchPanel updateSearch={onUpdateSearch} />
                <PostStatusFilter status={click} onclicklikedAll={() => setClick(!click)} />
            </div>
            <PostList  onDeleted={onDeleted}
                      posts={allPostData}
                          onToggleImportant={onToggleImportant}
                          onToggleLiked={onToggleLiked} />

                          <PostAddForm addNewElements={onAddItem} />
        </div>

    )
};

export default App