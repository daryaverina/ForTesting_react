import React, { useState, useRef } from 'react';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import ClassCounter from './components/ClassCounter';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';

function App() {
  const[posts, setPosts] = useState([
    {id:1, title:"mytitle", body:"mybody"},
    {id:2, title:"mytitle 2", body:"mybody 2"},
    {id:3, title:"mytitle 3", body:"mybody 3"}
  ])
  const[myval, setMyval] = useState('')

  const createPost = (newPost)=>{
    setPosts([...posts, newPost ]);
  }
  const drawval = (newPost)=>{
    setMyval(newPost.test)
    console.log(newPost.test)
  }
 
  return (
    <div class="App">
    <PostForm create = {createPost} draw={drawval}/>
    <h1>{myval}</h1>
    <PostList posts={posts} title="список постов"/>
    </div>
  );
}

export default App;
